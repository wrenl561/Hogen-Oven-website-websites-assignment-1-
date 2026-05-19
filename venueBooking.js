function validateForm(event) {

    event.preventDefault(); // STOP page refresh

    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var date = document.getElementById('date');
    var details = document.getElementById('details');

    var validFlag = true;

    if (name.value == "") {
        $("#name").addClass("error");
        validFlag = false;
    }
    else {
        $("#name").removeClass("error");
    }

    if (email.value == "") {
        $("#email").addClass("error");
        validFlag = false;
    }
    else {
        $("#email").removeClass("error");
    }

    if (date.value == "") {
        $("#date").addClass("error");
        validFlag = false;
    }
    else {
        $("#date").removeClass("error");
    }

    if (details.value == "") {
        $("#details").addClass("error");
        validFlag = false;
    }
    else {
        $("#details").removeClass("error");
    }

    if (validFlag) {
        alert("Form submitted!");
    }
}

function init() {

    document
        .getElementById('booking')
        .addEventListener('submit', validateForm);

}

window.onload = init;