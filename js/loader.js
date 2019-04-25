// Start of NHA's JavaScript
// Loader
window.addEventListener("load", function () {
    if (!document.querySelector(".loader")) console.log('Loader is not added in this page');
    else {
        const loader = document.querySelector(".loader");
        const html = document.getElementsByTagName("html");
        html[0].removeAttribute("class");
        loader.className += " hidden";
    }
});

//   // End of NHA's JavaScript

// start of zahins javascript

// end of zahins javascript

