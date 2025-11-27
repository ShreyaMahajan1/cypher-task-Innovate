
const mongoose = require('mongoose')

const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ProManager'

mongoose.connect(mongoUri)
.then(()=>{
    console.log("DB Connection Successfull");
})
.catch((err)=>{
    console.log("Error in Db Connection", err);
})