
// here we are requiring the express package
const express = require("express");

const app = express();
// Here app is just a function which represents the express module and we bind that to the word app .
// (always use the word app)

app.get("/", function(req, res){
res.send("<h1>Hello World!</h1>");
// the above line will send a response the request made by browser
});

// app.get is a method provided by the express which allows us to specify what should happen when a browser gets in touch with our server or makes a request.
// When the localhost:3000 the request is being sent to our root website which is represented by "/" and this is the first parameter.
// when the get request happens we can call a callback function which takes two parameters 1. request and 2. response

// explanation: 1. What should happen when a request is made to our server and then there's a callbakc function that tell the server what to
// do when a request happens.

app.get("/contact", function(req, res) {
  res.send("You can contact me at my cell!");
});

// Here /contact represents the route where we will come for the request. In the above app.get("/") only a forward slash was represnting
// the home directry i.e the home page.

app.get("/about", function(req, res) {
  res.send("<center>My name is Pulkit verma and I own this server</center>");
});

app.get("/meetup", function(req, res) {
  res.send("Free ni hu");
});

app.listen(3000, function() {
  console.log("Server has started on port 3000");
});
// Here app.listen is a method and this tells it to listen on a specific port (which is 3000 overhere) any http request sent to our server.
// Now a PORT is basically just a channel that we have tuned our server for example: radio and his channels(fm2.0 for something).
// Now we have a build out very first server
