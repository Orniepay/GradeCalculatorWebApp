console.log("I don't wanna do it.");

//Import the Express JS module. We're going to use Express JS framework for the back-end.
const express = require("express");
const path = require('path');
//Creates the Express application.
const APP = express();
//Port we'll use for HTTP.
const PORT = 3000;

/*  Whenever there is an HTTP get request, this callback function will be invoked.
    The function takes in 2 arguments. "req" is the request object. "res" is the response object.
    The send function will send a HTTP response.
*/
APP.get("/", function(req, res)
{cd
    //console.log(path);
    res.sendFile(path.join(__dirname, '/index.html'));
    //res.sendFile('../../FRONTEND/index.html');
});

APP.listen(PORT, function()
{
    console.log('Listening on port: ${PORT}'); 
});