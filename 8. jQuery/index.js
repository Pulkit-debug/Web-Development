
// Here the $ sign represents "document.querySelector()"
// JavaScript is used to shorten the code. very helpful.
// It is not good to change the style or css property by javaSciprt / jQuery instead we can use the class name

// To add a class we can do
$("h1").addClass("big-title margin-50");

// To change the text
$("h1").text("yo");

// And
$("h1").html("<em> yol </em>"); // Equivalent of .innnerHTML

// We can also change or apply attribute with the jquery

console.log($("a").attr("href"));

// Setting the attribute

$("a").attr("href", "https://www.bing.com");

// We can also get the classes present inside the element to get the all the classes attached to the element

$("a").attr("class");
// Removing the added classes
$("a").removeClass("big-title margin-50");

// In javaScript to add a click event
// for(var i = 0;i<5;i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", function() {
//     document.querySelector("h1").style.color = "purple";
//   });
// }

// IN jQuery to add a click event

$("button").click(function() {
  $("h1").css("color", "red");
});


// Now to detect the keyPress with jQuery
// Using the keypress to change the heading
$("input").keypress(function(event) {
  $(".check").text(event.key);
});


// Instead of using the .click function and .keypress function we can also use the method .on (It's Good Yes! it is.)
// This method takes two parameters one is the event that you're looking for  and the second is the functino that you want to apply
$("input").on("mouseover", function() {
  $("h1").css("color", "yellow");
});


// We can add and remove elements on the fly using jquery

// $("h1").before("<buttonbattu</button>");
// The above code will add the button right before the complete tag h1
//
// $("h1").after("<buttonbattu</button>");
// The above code will add the buutton right after the complete tag h1
//
// $("h1").prepend("<buttonbattu</button>");
// The above code will add the button after the opening h1 tag and before the text
//
// $("h1").append("<buttonbattu</button>");
// The above code will add the button after the text and before the closing h1 tag


// Website animations with jQuery

// 1.
/*
$("button").click(function() {
  $("h1").toggle(); // This will hide the heading if visible and if already hidden will show the heading. (hide and show).
});
*/

// 2.

/*
$("button").click(function() {
  $("h1").slideToggle(); // This will hide the heading with sliding up if not already and if the headingh is already hided it will slide down the heading and show it. (slideUp and slideDown)
});
*/


// 3.
// We can create our custom animatino by using .animate({})
/*
$("button").click(function() {
  $("h1").animate({opacity: 0.5});
});
*/


// 4.
// We can also combine different type of animations
/*
 $("button").click(function() {
   $("h1").slideUp().slideDown().animate({opacity: 0.5});
 });
 */
