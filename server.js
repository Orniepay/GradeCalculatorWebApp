function init_server()
{
    console.log("I don't wanna do it.");

    //Import the Express JS module. We're going to use Express JS framework for the back-end.
    const EXPRESS = require("express");
    const PATH = require('path');
    //Creates the Express application.
    const APP = EXPRESS();
    //Port we'll use for HTTP.
    const PORT = 8080;

    //Serves static files such as CSS.
    APP.use(EXPRESS.static(__dirname));

    /*  Whenever there is an HTTP get request, this callback function will be invoked.
        The function takes in 2 arguments. "req" is the request object. "res" is the response object.
        The send function will send a HTTP response.
    */
    APP.get("/", function(req, res)
    {
        res.sendFile(PATH.join(__dirname, '/index.html'));
    });

    APP.listen(PORT, function()
    {
        console.log(`Listening on port: ${PORT}`); 
    });
}

init_server();