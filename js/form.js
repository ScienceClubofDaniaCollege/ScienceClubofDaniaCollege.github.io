var check = function () {
    var y = document.getElementById("cpassword");

    if (x.value == y.value) {
        y.style.border = '2px solid green';

    } else {
        y.style.border = '2px solid red';
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
