// Start of NHA's JavaScript
// Loader Old JS
function fadeOutEffect(fadeTime) {
  var target = document.querySelector('#loader');

  function loaded() {target.style.display = "none";};

  var fadeEffect = setInterval(

  function () {
    if (!target.style.opacity) {target.style.opacity = 1;}

    if (target.style.opacity > 0) {
      target.style.opacity -= 0.2;
    } else {
      clearInterval(fadeEffect);
      loaded();
    }
  }, fadeTime);
};

document.querySelector('body').onload = fadeOutEffect(50);
// Loader New JS
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

// Navbar appear on scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
};
// End of NHA's JavaScript