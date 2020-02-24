
// module.exports = getDate; // Here we are exporting our getDate function and we can require it in out app.js

// To use more than one funtions ( hint: we know that module is a object ;)

module.exports.getDate = getDate;
function getDate() {
let today = new Date(); // by using this method we can get the present day starting from 0 till 6

// Instead of usig a switch we can make our work in short and neat by using the below method.
let options = { // Date format
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric"
}

let day = today.toLocaleDateString("en-US", options); // this method will return a string of the options in en-US format
return day;
}

module.exports.getDay = getDay;
function getDay() {
  let today = new Date();

  let options = {
    weekday: "long",
  }
  let day = today.toLocaleDateString("en-US", options);
  return day;
}
