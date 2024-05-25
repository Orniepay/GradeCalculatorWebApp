// Load Express library into project, which is a framework that simplifies creating server applications in Node.js
const express = require('express')
// Create a new Express application. The object 'app' is used to set up server 
const app = express()

// Set up a route that listens for HTTP GET requests on the path '/api' when a request is made, the function specified will run
app.get("/api", (req, req) => {
    // Send a response back as JSON format, which in this case is a list of users 
    res.json({"users": ["userOne", "userTwo", "userThree"]})
})

// Tell our application to listen for incoming connections on port 5000. This starts our server
app.listen(5000, () => { console.log("Server stated on port 5000")})