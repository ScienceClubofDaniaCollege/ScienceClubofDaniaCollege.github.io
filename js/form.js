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
    var openedEye = document.getElementById("eye");
    var closedEye = document.getElementById("eyex");
    var passField = document.getElementById("password");
    if (passField.type === "password") {
        passField.type = "text";
        // y.value = "---";
        // y.color = "blue";
        openedEye.style.display = "block";
        closedEye.style.display = "none";

    } else {
        passField.type = "password";
        openedEye.style.display = "none";
        closedEye.style.display = "block";
    }
}
