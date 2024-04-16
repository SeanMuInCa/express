const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const userName = "Zhenghua_Mu";
const pwd = "123456abc";
const dbname = "music_app";
const uri = `mongodb+srv://${userName}:${pwd}@cluster0.i53ojqm.mongodb.net/${dbname}?retryWrites=true&w=majority`; //&appName=Cluster0


mongoose.connect(uri).then((con)=>{
    console.log("connected to MongoDB");
}).catch((err)=>{
    console.log(err);
});

const db = mongoose.connection;