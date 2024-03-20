//import
const router = require('./routes/routes');
const express = require("express");
const dbConnector = require('./database/connect');//leave it there to create connection when the backend start

const backend = express();



//root route
backend.get("/", (req, res) => {
    res.redirect("/api/music");
    console.log("someone is coming to root and redirect to music");
    //res.send('hello world in root');
});

backend.use('/api/', router);


backend.listen("3001", () => {
    console.log("server on 3001");
});

//practice
// const musicSchema = new mongoose.Schema({
//     album: String,//that's ok too
//     artist: {type: String, required: false},
//     year: {type: Number, required: false},
//     artwork: [String]
// });

//practice
// const customers = new mongoose.Schema({
//     username: String,
//     name: String,
//     address: String,
//     birthdate: Date,
//     email: String,
//     accounts: [Number],
//     tier_and_details: [
//         {
//             tier: String,
//             id:String,
//             active: Boolean,
//             benefits: [String]
//         }
//     ]
// })
