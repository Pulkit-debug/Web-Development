const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js"); // requiring my local date.js to get the present dd (my own date module)
const app = express();


app.set('view engine', 'ejs'); // this is to set the ejs to say that "me use karega ejs ko".
let items = ["I", "Am", "IronMan"];
let workItems = [];
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

app.get("/", function(req, res) {
// my day is in the date.js

let day = date.getDay(); // Here I am using my date to get the dd because I required it on the header portion
  res.render("list", {
    listTitle: day,
    newListItem: items
  }); // this method will render the whole list.ejs and will search for kindOfDay(key) in the list.ejs and will set it to the day(pair)) works in the format of (key: pair);

});

app.post("/", function(req, res) {
  let item = req.body.newItem;
  if (req.body.submit === "Work List") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
  // res.send(data + " is added to the list");

  //
  // var newListItem = data;
  // res.render("list", {newListItem: item});

});

// ************* code for work route ************  //

app.get("/work", function(req, res) {
  res.render("list", {
    listTitle: "Work List",
    newListItem: workItems
  });
});

app.post("/work", function(req, res) {
  let item = req.body.newItem;
  workItems.push(item);

  res.redirect("/work");
});
// **********************************************//

// ***** Route for about page **************//

app.get("/about", function(req, res) {
  res.render("about");
});

app.listen(3000, function(req, res) {
  console.log("Server has stated running in port 3000");
});
