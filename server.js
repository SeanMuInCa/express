const express = require('express');
const router = require('./routes/routes');

const backend = express();

// ROOT ROUTE
backend.get('/', function(req, res){
    res.redirect('/api/music');
});

backend.use('/api/', router);

backend.listen(3001, function(){
    console.log("Server started");
});