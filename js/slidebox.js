// Start of NHA's JavaScript

  // End of NHA's JavaScript
  
  // start of zahins javascript
  var number = 1;
  showDivs(number);
  
  function prewiew(n) {
    showDivs(number += n);
  }
  
  function showDivs(n) {
    var i;
    var galleryPhoto = document.getElementsByClassName("photo");
    if (n > galleryPhoto.length) {
      number = 1}
    if (n < 1) {
      number = galleryPhoto.length}
    for (i = 0; i < galleryPhoto.length; i++) {
       galleryPhoto[i].style.display = "none";  
    }
    galleryPhoto[number-1].style.display = "block";  
  };
  // end of zahins javascript

