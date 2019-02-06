// NHA's JavaScript
// Loader
const fadeOutEffect = (fadeTime) => {
    let target = document.querySelector('#loader');
    let loaded = () => {target.style.display = "none"};
    
    let fadeEffect = setInterval(function () {
        if (!target.style.opacity) {
            target.style.opacity = 1;
        }
        if (target.style.opacity > 0) {
            target.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
            loaded();
        }
    }, fadeTime);
};
document.querySelector('body').onload = fadeOutEffect(50);

// Navbar appear on scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}