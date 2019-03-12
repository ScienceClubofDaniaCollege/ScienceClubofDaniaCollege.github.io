// Start of NHA's JavaScript
// Loader Old JS
// function fadeOutEffect(fadeTime) {
//     var target = document.querySelector('#loader');

//     function loaded() {
//         target.style.display = "none";
//     };

//     var fadeEffect = setInterval(

//         function () {
//             if (!target.style.opacity) {
//                 target.style.opacity = 1;
//             }

//             if (target.style.opacity > 0) {
//                 target.style.opacity -= 0.2;
//             } else {
//                 clearInterval(fadeEffect);
//                 loaded();
//             }
//         }, fadeTime);
// };
// document.querySelector('body').onload = fadeOutEffect(50);
//   // Loader New JS
//   const fadeOutEffect = (fadeTime) => {
//       let target = document.querySelector('#loader');
//       let loaded = () => {target.style.display = "none"};

//       let fadeEffect = setInterval(function () {
//           if (!target.style.opacity) {
//               target.style.opacity = 1;
//           }
//           if (target.style.opacity > 0) {
//               target.style.opacity -= 0.1;
//           } else {
//               clearInterval(fadeEffect);
//               loaded();
//           }
//       }, fadeTime);
//   };
//   document.querySelector('body').onload = fadeOutEffect(50);



















window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; // class "loader hidden"
});

//   // End of NHA's JavaScript

// start of zahins javascript

// end of zahins javascript

