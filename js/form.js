// Form validation
var cPassField = document.getElementById("cpassword");
var passField = document.getElementById("password");
var submitButton = document.getElementById("submitButton")
function validate() {
    if (passField.value == cPassField.value) {
        cPassField.style.background = '#28a74575';
        submitButton.removeAttribute("disabled");
    } else {
        cPassField.style.background = '#dc35458c';
        submitButton.setAttribute("disabled", "");
    }
}

// Password visibility
function toglePassVisibility() {
    var openedEye = document.getElementById("eye");
    var closedEye = document.getElementById("eyex");
    var passField = document.getElementById("password");
    if (passField.type === "password") {
        passField.type = "text";
        openedEye.style.display = "block";
        closedEye.style.display = "none";
    } else {
        passField.type = "password";
        openedEye.style.display = "none";
        closedEye.style.display = "block";
    }
}
// Generating member ID

function generateMemberId(){
    var memberIdContainer = document.getElementById("memberId");
    var batch = document.getElementById("batch");
    var shift = document.getElementById("shift");
    var section = document.getElementById("section");
    var roll = document.getElementById("roll");
    var shiftSymbol = (shift.value).slice(0,1);
    var tempId = batch.value+"-"+shiftSymbol+"-"+section.value+"-"+roll.value.slice(2,20);
    var id = tempId.slice(4,20);
    memberIdContainer.value = id;
}