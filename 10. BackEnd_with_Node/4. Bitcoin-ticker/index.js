const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();  // Setting app to a new instance of express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  // console.log(req.body.crypto);

  request("url", function(error, response, body) {     // Here the body will return the data in the json format

    var data = JSON.parse(body);    // This will parser the data in javaScript code from JSON format
    var price = body.last;
    console.log(price);
    // console.log(response.statusCode);    // Here the response.statusCode will return the statusCode in response ex: 200, 400, 404
    // body will print every data in detail.
      res.write("something in here");  // If we want to send more than one then we use res.write() and after writing every thing that we have to send then we use res.send()

    res.send("<h1> The price of the bitcoin is </h1>" + price); // This method will send the h1 that will shot the price of the bitcoin
    // we Can also copy the path with json format viewer in chrome for any element


  });

  // request will act to our query for convrtin the currency
  // At the place of url the url of the site will come where we want to send the data
  // The above post function will provide every data for conversion and more in the bash

});

// 1. Now after the basic setup I have to transfer all the data to the server

// To make external api call inside a server we have to use the request module     command: npm install request

app.listen(3000, function() {
console.log("Server is running on port 3000");
});
