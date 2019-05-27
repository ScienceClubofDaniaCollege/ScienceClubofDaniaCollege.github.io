var btn = document.getElementById('showbtn');
var inf = document.getElementsByClassName('info');
var tlt = document.getElementsByClassName('title');
var y = document.getElementsByClassName('year');
var m = document.getElementsByClassName('month');
var x = document.getElementById('navbarDropdown');
var im = document.getElementsByClassName('img');
var tb = document.getElementsByTagName('table');



function allphoto() {
  for (var i=0;i<y.length;i+=1){
	y[i].classList.remove('hide');
	x.innerHTML = 'All Photos';
}
for (var i=0;i<m.length;i+=1){
    m[i].classList.remove('hide');
}
};



function year() {
 for (var i=0;i<y.length;i+=1){
	y[i].classList.remove('hide');
	x.innerHTML = 'This Year';
}
for (var i=0;i<m.length;i+=1){
    m[i].classList.add('hide');
}
};



function month() {
 for (var i=0;i<y.length;i+=1){
	y[i].classList.add('hide');
	x.innerHTML = 'This Month';
}
for (var i=0;i<m.length;i+=1){
    m[i].classList.remove('hide');
}
};




if (window.innerWidth <= 660) {
	for (var i=0;i<inf.length;i+=1){
	inf[i].classList.add('hide');
	btn.classList.remove('hide');
}
for (var i=0;i<tlt.length;i+=1){
	tlt[i].innerHTML =tlt[i].innerHTML +":"+ inf[i].innerHTML;
}
for (var i=0;i<im.length;i+=1){
    im[i].style.width = '100%';
}
};



function showdet() {
    if (btn.innerText == 'Show Details') {
        btn.innerText = 'Hide Details';
        for (var i = 0; i < inf.length; i++) {
        	tlt[i].classList.add('hide');
        };
    }
    else {
        btn.innerText = 'Show Details';
        for (var i = 0; i < inf.length; i++) {
        	tlt[i].classList.remove('hide');
            tlt[i].innerHTML=tlt[i].innerHTML +":"+ inf[i].innerHTML;
        };
    }
};