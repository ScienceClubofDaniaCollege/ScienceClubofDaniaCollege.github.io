// Start of NHA's JavaScript
function genNav(p0, p1) {
  return `
  <div class="loginbtn">
        <a href="${p1}member-area.html" id="member-area"><i class="fas fa-sign-in-alt"></i></a>
  </div>
<nav class="navbar before navbar-expand-lg sticky-top" id="navbari">

<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
</button>
<div class="collapse navbar-collapse" id="navbarNavDropdown">
<ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link" href="${p0}index.html" id="home">Home</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="${p1}subject.html"  id="subject">Subjects</a>
        </li>
                <li class="nav-item">
                <a class="nav-link" href="${p1}gallery.html"  id="gallery">Gallery</a>
                </li>
        <li class="nav-item">
            <a class="nav-link" href="${p1}events.html" id="events">Events</a>
            </li>
        <li class="nav-item">
        <a class="nav-link" href="${p1}about-us.html"  id="about">About</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="${p1}memberlist.html" id="member-list">Members List</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="${p1}register.html" id="register">Register</a>
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




//adding avator of logged in member

var mem;
let lc = document.getElementsByClassName('loginbtn');
fetch('https://dscapi.herokuapp.com/who', { credentials: 'include' })
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        console.log(myJson);
        mem = myJson;
        if (mem.fname) {
            lc[0].innerHTML =`<div>
                <a href="/html/member-area.html">
                    <img src="${mem.photo[0]}"  style="width: 45px; height:45px; border-radius:50%;">
                </a>
                </div>`;
        }
    });



// adding head content
const head = document.getElementsByTagName('head');
const headContent = `
<!-- Font Awsome -->
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.0/css/all.css" integrity="sha384- Mmxa0mLqhmOeaE8vgOSbKacftZcsNYDjQzuCOm6D02luYSzBG8vpaOykv9lFQ51Y" crossorigin="anonymous">
`
const addHeadContent = () => {
  head[0].innerHTML += headContent;
}
addHeadContent();

// End of NHA's JavaScript



// start of zahins javascript


function hidesct() {
  var x = document.getElementById("sct");
  var y = document.getElementById("hidesct");
  if (x.style.left == "-205px") {
    x.style.left = "0px";
    y.style.left = "0px";
    y.style.opacity = "1";
  } else {
    x.style.left = "-205px";
    y.style.left = "-200px";
    y.style.opacity = ".4";
  }
}

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  var x = document.querySelector('.navbar')
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
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