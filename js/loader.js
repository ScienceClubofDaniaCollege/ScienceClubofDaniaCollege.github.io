// Start of NHA's JavaScript
// Loader
window.addEventListener("load", function () {
    if (!document.querySelector(".loader"))console.log('Loader is not added in this page');
    else {
    const loader = document.querySelector(".loader");
    const html = document.getElementById("html");
    const body = document.getElementById("body");
    html.removeAttribute("class");
    body.classList.remove("noscroll");
    loader.className += " hidden"; // class "loader hidden"
    }
});

//   // End of NHA's JavaScript

// start of zahins javascript

// end of zahins javascript

