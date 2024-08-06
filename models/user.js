const mongoose= require('mongoose');
const schema= mongoose.Schema;

//user schema creation
const UserSchema=new schema({
    googleID:{
        type: String,
        required: true
    },
    displayName:{
        type: String,
        required: true
    },
    firstName:{
        type: String,
        required: true
    },
    profileImage:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }

})

module.exports=mongoose.model('User',UserSchema);