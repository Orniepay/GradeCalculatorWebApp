console.log("I don't wanna do it.");

//Import the Express JS module. We're going to use Express JS framework for the back-end.
const express = require("express");
//Creates the Express application.
const APP = express();
//Port we'll use for HTTP.
const PORT = 3000;

/*  Whenever there is an HTTP get request, this callback function will be invoked.
    The function takes in 2 arguments. "req" is the request object. "res" is the response object.
    The send function will send a HTTP response.
*/
APP.get("/", function(req, res)
{
    console.log(req);
    res.send("Ez nerd");
});

APP.listen(PORT, function()
{
    console.log('Listening on port: ${PORT}'); 
});