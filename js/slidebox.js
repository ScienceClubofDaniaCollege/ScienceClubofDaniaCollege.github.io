// Start of NHA's JavaScript

  // End of NHA's JavaScript
  
  // start of zahins javascript
  var slideIndex = 1;
  showDivs(slideIndex);
  
  function prewiew(n) {
    showDivs(slideIndex += n);
  }
  
  function showDivs(n) {
    var i;
    var galleryPhoto = document.getElementsByClassName("photo");
    if (n > galleryPhoto.length) {slideIndex = 1}
    if (n < 1) {slideIndex = galleryPhoto.length}
    for (i = 0; i < galleryPhoto.length; i++) {
       galleryPhoto[i].style.display = "none";  
    }
    galleryPhoto[slideIndex-1].style.display = "block";  
  };
  // end of zahins javascript