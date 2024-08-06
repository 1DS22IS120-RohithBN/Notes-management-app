const mongoose= require('mongoose')
mongoose.set('strictQuery',false)
 
//connecting to our mongoDB database

const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URL);
        console.log(`Database connexted ${conn.connection.host}`)

    }
    catch(error){
        console.log(error);

    }
}
module.exports=connectDB;