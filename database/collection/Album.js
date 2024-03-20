const mongoose = require('../connect')


const musicSchema = new mongoose.Schema({
    album: { type: String, required: true }, //change to true to test
    artist: { type: String, required: false },
    year: { type: Number, required: false },
    artwork: { type: String, required: false }
});

const Album = mongoose.model("Album", musicSchema); //mongodb will automatically updated your database name to s,in my case it's albums

module.exports = Album;