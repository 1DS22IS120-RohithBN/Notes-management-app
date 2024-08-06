require('dotenv').config();
const express=require('express');
const expressLayout=require('express-ejs-layouts');
const connectDB=require('./config/db')
const methodOverride=require('method-override')
const session=require('express-session');
const passport=require('passport');
const MongoStore=require('connect-mongo');

const app=express();
const port=5700 || process.env.PORT;

app.use(session({
    secret:'keyboard cat',
    resave:false,
    saveUninitialized:true,
    store:MongoStore.create({ mongoUrl:process.env.MONGO_URL}),
    //cookie:{maxAge: new Date (Date.now()+(3600000))}
}))


app.use(passport.initialize());
app.use(passport.session());

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride("_method"));
connectDB();


//static files
app.use(express.static('public'));

//template engine
app.use(expressLayout);
app.set('layout','./layouts/main');
app.set('view engine','ejs');

//route
app.use('/',require('./routes/auth'));
app.use('/',require('./routes/index'));
app.use('/',require('./routes/dashboard'));


app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
});

