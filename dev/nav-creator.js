const menuNameList = ['Apon', 'Zahin','Apon', 'Zahin','Apon', 'Zahin'];
const menuSrcList = ['Apon.htm', 'Zahin.htm','Apon.htm', 'Zahin.htm','Apon.htm', 'Zahin.htm'];


function genMenuItem (name, src) {return `<li class="nav-item"><a class="nav-link" href="${src}" id="${name.toLowerCase()}">${name}</a></li>`}
function genMenu() {
    let menuItems = '';
    for (i = 0; i < menuNameList.length; i++) {
        menuItem = genMenuItem(menuNameList[i], menuSrcList[i]);
        menuItems = menuItems + menuItem;
    }
    return menuItems;
}


const navBar = `<nav class="navbar navbar-dark bg-primary navbar-expand-lg sticky-top box-shadow" id="navbari">
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNavDropdown">
<ul class="navbar-nav">
${genMenu()}
</ul>
</div>
</nav>
        `