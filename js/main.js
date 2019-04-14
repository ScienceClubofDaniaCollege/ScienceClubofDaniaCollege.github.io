// Start of NHA's JavaScript
function genNav(p0, p1){
  return `
<nav class="navbar before navbar-expand-lg sticky-top" id="navbari">

<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
</button>
<div class="collapse navbar-collapse" id="navbarNavDropdown">
<ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link" href="${p0}index.html" id="home">Home</a>
        </li>
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Subjects
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="${p1}math.html">Math</a>
            <a class="dropdown-item" href="${p1}physics.html">Physics</a>
                <a class="dropdown-item" href="${p1}chemistry.html">Chemistry</a>
                <a class="dropdown-item" href="${p1}biology.html">Biology</a>
                <a class="dropdown-item" href="${p1}ict.html">ICT</a>
                </div>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="${p1}gallery.html"  id="gallery">Gallery</a>
                </li>
        <li class="nav-item">
            <a class="nav-link" href="${p1}events.html" id="events">Events</a>
            </li>
        <li class="nav-item">
        <a class="nav-link" href="${p1}about-us.html"  id="about">About </a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="${p1}memberlist.html" id="member-list">Members List</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="${p1}member-area.html" id="member-area">Member Area</a>
        </li>
        </ul>
        </div>
        </nav>
        `
}

const navBar = genNav('../', '');
const navBarI = genNav('', 'html/');

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
if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
  x.classList.remove('before');
  x.classList.add('after');
  x.classList.add('box-shadow');
} else {
  x.classList.remove('after');
  x.classList.remove('box-shadow');
  x.classList.add('before');
}
}
// end of zahins javascript