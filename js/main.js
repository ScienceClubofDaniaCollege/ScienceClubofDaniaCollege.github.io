// // Start of NHA's JavaScript
// // Loader Old JS
// function fadeOutEffect(fadeTime) {
//   var target = document.querySelector('#loader');

//   function loaded() {target.style.display = "none";};

//   var fadeEffect = setInterval(

//   function () {
//     if (!target.style.opacity) {target.style.opacity = 1;}

//     if (target.style.opacity > 0) {
//       target.style.opacity -= 0.2;
//     } else {
//       clearInterval(fadeEffect);
//       loaded();
//     }
//   }, fadeTime);
// };

// document.querySelector('body').onload = fadeOutEffect(50);
// // Loader New JS
// const fadeOutEffect = (fadeTime) => {
//     let target = document.querySelector('#loader');
//     let loaded = () => {target.style.display = "none"};
    
//     let fadeEffect = setInterval(function () {
//         if (!target.style.opacity) {
//             target.style.opacity = 1;
//         }
//         if (target.style.opacity > 0) {
//             target.style.opacity -= 0.1;
//         } else {
//             clearInterval(fadeEffect);
//             loaded();
//         }
//     }, fadeTime);
// };
// document.querySelector('body').onload = fadeOutEffect(50);
// // End of NHA's JavaScript

// start of zahins javascript
var slideIndex = 1;
showDivs(slideIndex);

function prewiew(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("photo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
};
// end of zahins javascript