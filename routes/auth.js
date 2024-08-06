const express = require('express');
const router = express.Router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/user')



// google authentication using passport js
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
},
    async function (accessToken, refreshToken, profile, done) {
        const newUser = {
            googleID: profile.id,
            displayName: profile.displayName,
            firstName: profile.name.givenName,
            profileImage: profile.photos[0].value
        }
        try {
            let user = await User.findOne({ googleID: profile.id })
            if (user) {
                done(null, user)
            } else {
                // if user doesnt exist new user is created
                user = await User.create(newUser);
                done(null, user)
            }

        }
        catch (error) {
            console.error(error)
        }
    }
));


router.get('/auth/google',
    passport.authenticate('google', { scope: ['email', 'profile'] }));

router.get('/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/',
        successRedirect: '/dashboard'
    }),
);

//logout function

router.get('/logout',(req,res)=>{
    req.session.destroy(error=>{
        if(error){
        console.log(error);
        res.send('Error Logging out')
        }
        else{
            res.redirect('/');
            }
    })
})


// persist user data after authentication
passport.serializeUser(function (user, done) {
    done(null, user.id);
});



passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (err) {
      done(err, null);
    }
  });

module.exports = router;