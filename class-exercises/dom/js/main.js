console.log("hello hello");

let pageTitle = document.querySelector("#page-title");
let audio = document.getElementById("audio");
audio.play();

// Javascript Timeout chnages h1 title after 3 seconds
setTimeout(function () {
  pageTitle.style.color = "pink";
  console.log("timeout worked!");
}, 3000);

// Click event on header changes background color
document.querySelector("header").onclick = function () {
  // console.log("clicked header");
  document.querySelector("body").style.backgroundColor = "black";
};

/* Changing without storing in variables

// // Javascript Timeout chnages h1 title after 3 seconds
// setTimeout(function () {
//     document.querySelector("#page-title").style.color = "pink";
//     console.log("timeout worked!");
//   }, 3000);
  
//   // Click event on header changes background color
//   document.querySelector("header").onclick = function () {
//     // console.log("clicked header");
//     document.querySelector("body").style.backgroundColor = "black";
//   }
*/
