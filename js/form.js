function check() {
    var y = document.getElementById("cpassword");
    var x = document.getElementById("password");
    if (x.value == y.value) {
        y.style.border = '3px solid #42dd42';

    } else {
        y.style.border = '3px solid red';
    }

}

function showpass() {
    var a = document.getElementById("eye");
    var b = document.getElementById("eyex");
    var x = document.getElementById("password");
    var y = document.getElementById("eye");
    if (x.type === "password") {
        x.type = "text";
        y.value = "---";
        y.color = "blue";
        a.style.display = "none";
        b.style.display = "block";

    } else {
        x.type = "password";
        y.value = "👁️";
        a.style.display = "block";
        b.style.display = "none";
    }
}
