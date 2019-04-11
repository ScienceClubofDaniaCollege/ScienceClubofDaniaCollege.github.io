// Start of NHA's JavaScript
const navBar = `
<nav class="navbar navbar-dark bg-primary navbar-expand-lg sticky-top box-shadow" id="navbari">

<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link" href="../index.html">Home</a>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Subjects
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="math.html">Math</a>
                <a class="dropdown-item" href="physics.html">Physics</a>
                <a class="dropdown-item" href="chemistry.html">Chemistry</a>
                <a class="dropdown-item" href="biology.html">Biology</a>
                <a class="dropdown-item" href="ict.html">ICT</a>
            </div>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="gallery.html">Gallery</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="events.html">Events</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="about-us.html">About </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="memberlist.html">Members List</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="member-area.html">Member Area</a>
      </li>
    </ul>
</div>
</nav>
`


const navBarI = `
<nav class="navbar navbar-dark bg-primary navbar-expand-lg sticky-top box-shadow" id="navbari">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
  <ul class="navbar-nav">
    <li class="nav-item opend">
      <a class="nav-link" href="index.html">Home</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Subjects
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <a class="dropdown-item" href="html/math.html">Math</a>
        <a class="dropdown-item" href="html/physics.html">Physics</a>
        <a class="dropdown-item" href="html/chemistry.html">Chemistry</a>
        <a class="dropdown-item" href="html/biology.html">Biology</a>
        <a class="dropdown-item" href="html/ict.html">ICT</a>
      </div>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="html/gallery.html">Gallery</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="html/events.html">Events</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="html/about-us.html">About</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="html/memberlist.html">Members List</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="html/member-area.html">Member Area</a>
    </li>
  </ul>
  </div>
</nav>`


const navContainer = document.querySelector("#navbar");
const navContainerI = document.querySelector("#navbari");
if (navContainer == null) {
    navContainerI.innerHTML = navBarI;
} else {
    navContainer.innerHTML = navBar;
}

const img = document.getElementsByTagName('img');
for (let i = 0; i < img.length; i++) {
  // console.log(i+1 +' img tag');
  if (!img[i].alt) console.log('img tag without alt attribute');
}

// End of NHA's JavaScript

// start of zahins javascript


function hidesct() {
  var x = document.getElementById("sct");
var y = document.getElementById("hidesct");
    if (x.style.left == "-75px") {
        x.style.left = "0px";
        y.style.left = "0px";
        y.style.opacity = "1";
    } else {
        x.style.left = "-75px";
        y.style.left = "-70px";
        y.style.opacity = ".4";
    }
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
var x = document.querySelector('.navbar')

 if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
   x.classList.remove('bg-primary');
   x.classList.add('bg-dark');
 } else {
  x.classList.remove('bg-dark');
   x.classList.add('bg-primary');
 }
}
// end of zahins javascript
