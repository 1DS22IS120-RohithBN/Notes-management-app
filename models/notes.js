const mongoose= require('mongoose');
const schema= mongoose.Schema;

//notes schema creation

const NoteSchema=new schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    title:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})




module.exports=mongoose.model('Note',NoteSchema)