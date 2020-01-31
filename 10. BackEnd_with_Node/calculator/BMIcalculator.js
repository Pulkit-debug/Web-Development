const express = require("express");

const bodyParser = require("body-parser");
// requiring the body parser for the calculation.
const app = express();

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");  // __dirname will get the directory of current files doesn't matter whether the data is on the cloud or someone else computer
  // console.log(__dirname);
});


                // ---------------------------- Using body-parser-------------------

                /*

                Now to calculate the result we have to install a package called body-parser

                Working of body-parser {
                what the body parser will do that it will parser the data that gets submitted or send via html forms so that we can use the different
                properties and get access to them.

                }

                */

app.use(bodyParser.urlencoded({extended: true}));

// When we are trying to use the data that comes from html forms we have to use bodyParser.urlendcoded!!    There are also some others like
// bodyParser.text() etc.
// By setting that extended: true it basically allows us to use nested object this piece of code is not required by us instead
// it is required by the bodyParser..       Everytime we have to use bodyParser we have to use this piece of code extended: true;

// Now by using the bodyParser we have parsed the data that was coming from the html form and to use that parsed data we have to use app.body which will contain all the parsed data inside our post method


app.post("/", function(req, res) {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var result = (weight + (height *height));
  res.send("The result of the Addition is " + result);
});
      // ************************ Using the Post method***********************

// The above method is to use when someone post something to our home route which is "/" and then it calls the callback funtion which
// will send the message in response to the post

      //******************************************************************

// Here num1 is the name that we have given the first number in our index.html
// Here  only doing num1 + num2 will not give the result instead we have to typecaste them in the number because without manual typecasting it will add the numbers as strings.

app.listen(1000, function() {
  console.log("Server is running on port 1000");
});
