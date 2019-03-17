var check = function () {
    var y = document.getElementById("cpassword");

    if (x.value == y.value) {
        y.style.border = '2px solid green';

    } else {
        y.style.border = '2px solid red';
    }

}

function showpass() {
    var x = document.getElementById("password");
    var y = document.getElementById("eye");
    if (x.type === "password") {
        x.type = "text";
        y.value = "---";
        y.color = "blue";
    } else {
        x.type = "password";
        y.value = "👁️";
    }
}
