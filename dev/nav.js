const navBar = `
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
            <a class="nav-link" href="about-us.html">About</a>
        </li>
    <li class="nav-item dropdown">
<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Member
</a>
<div class="dropdown-menu" aria-labelledby="navbarDropdown">
<a class="dropdown-item" href="form.html">Register</a>
<a class="dropdown-item" href="login.html">Login</a>
</div>
</li>
    </ul>
</div>`


const navBarI = `    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNavDropdown">
<ul class="navbar-nav">
  <li class="nav-item active">
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
          <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Member
    </a>
    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
      <a class="dropdown-item" href="html/form.html">Register</a>
      <a class="dropdown-item" href="html/login.html">Login</a>
    </div>
  </li>
</ul>
</div>`







const navContainer = document.querySelector("#navbar");
const navContainerI = document.querySelector("#navbari");
if (navContainer == null) {
    navContainerI.innerHTML = navBarI;
} else {
    navContainer.innerHTML = navBar;
}
