var y = document.getElementsByClassName('year');
var m = document.getElementsByClassName('month');
var x = document.getElementById('navbarDropdown');
function allphoto() {
  for (var i=0;i<y.length;i+=1){
	y[i].style.display = 'block';
	x.innerHTML = 'All Photos';
}
for (var i=0;i<m.length;i+=1){
    m[i].style.display = 'block';
}
};
function year() {
 for (var i=0;i<y.length;i+=1){
	y[i].style.display = 'block';
	x.innerHTML = 'This Year';
}
for (var i=0;i<m.length;i+=1){
    m[i].style.display = 'none';
}
};
function month() {
 for (var i=0;i<y.length;i+=1){
	y[i].style.display = 'none';
	x.innerHTML = 'This Month';
}
for (var i=0;i<m.length;i+=1){
    m[i].style.display = 'block';
}
};
var btn = document.getElementById('showbtn');
var inf = document.getElementsByClassName('info');
var tlt = document.getElementsByClassName('title');
var im = document.getElementsByClassName('img');
if (window.innerWidth <= 660) {
	for (var i=0;i<inf.length;i+=1){
	inf[i].style.display = 'none';
	btn.classList.remove('hide');
}
for (var i=0;i<tlt.length;i+=1){
	tlt[i].innerHTML =tlt[i].innerHTML +":"+ inf[i].innerHTML;
}
for (var i=0;i<im.length;i+=1){
    im[i].style.width = '100%';
}
};
    var btn = document.getElementById('showbtn');
    var inf = document.getElementsByClassName('info');
    var tlt = document.getElementsByClassName('title');
function showdet() {
    if (btn.innerText == 'Show Details') {
        btn.innerText = 'Hide Details';
        for (var i = 0; i < inf.length; i++) {
            tlt[i].innerHTML =tlt[i].innerHTML -":"-inf[i].innerHTML;
        };
    }
    else {
        btn.innerText = 'Show Details';
        for (var i = 0; i < inf.length; i++) {
            tlt[i].innerHTML=tlt[i].innerHTML +":"+ inf[i].innerHTML;
        };
    }
};