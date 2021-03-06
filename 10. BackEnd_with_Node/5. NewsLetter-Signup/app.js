const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();


app.use(express.static("public"));  // By using this static we are saying that this folder files will be accessible when I will try to access a file that might be flooded with some of the folder/files in the public.
// static gives these folder the ability to be rendered.

app.use(bodyParser.urlencoded({extended: true}));  // using the bodyParser to get the data when someone post someting

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});




app.post("/", function(req, res) {  // handling the post request for home route
  var firstName = req.body.fName;
  var secondName = req.body.lName;
  var email = req.body.mail;
    // console.log(firstName + " " + secondName + " " + email);

var data = {
  members: [ // an Array of objects
    {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: firstName,
        LNAME: secondName
      }// These are the fields for a  particular person their data like name address etc.
    }  // objects. We can have multiple objects but in this case we only want one
  ]
};

var jsonData = JSON.stringify(data); // to convert the javaScript data into JSON format because we cant't sent javaScript data we have to send it in the JSON format

    var options = {
      url: "https://us4.api.mailchimp.com/3.0/lists/ae18621f36",
      method: "POST", // Default method is get method so we have to explicitly define that the method is post we are using beccause we need to post the data to mailchimp that the user is putting in it.
      headers: {  // headers is used for http authentication request
        "Authorization": "Pulkit1 ba778c084dce63c8a8d02c5a0f3e4ec1-us4"
      },
      body: jsonData  // body will be the data to send ;)
    };

    request(options, function(error, response, body) {  // here the body is the data and this request method will act as per the request made / the data submitted.
    // the request will be made to mailchimps servers
    if(error) {
      res.sendFile(__dirname + "/failure.html");
      console.log(response.statusCode);
    } else if(response.statusCode === 200){
      res.sendFile(__dirname + "/success.html");
    } else {
      res.sendFile(__dirname + "/failure.html");
      console.log(response.statusCode);
    }
  });
});

app.post("/failure", function(req, res) {
  res.redirect("/");  // redirecting to the home route with a button if the user encounters failure
});

app.listen(process.env.PORT || 3000, function() { // Here process.env.PORT is for Heroku because it will set it's own port not our local port by using ||(or) we can set the port to listen to both the heroku and our local port
  console.log("Server is running on port 3000");
});

// to diagonise something in heroku we can alwayse use heroku logs


// API:    ca209d9a392bfa8244013b9ff7fceff7-us4

//LIST ID/AUDIENCE ID:     ae18621f36
