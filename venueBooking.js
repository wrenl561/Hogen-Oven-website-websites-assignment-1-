function validateForm() {
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var date = document.getElementById('date');
    var details = document.getElementById('details');

    if (name.value == "") {
        $("#name").addClass("error");
    }
    else {
        $("#name").removeClass("error");
    };
    if (email.value == "") {
        $("#email").addClass("error");
    }
    else {
        $("#email").removeClass("error");
    };
    if (date.value == "") {
        $("#date").addClass("error");
    }
    else {
        $("#date").removeClass("error");
    };
    if (details.value == "") {
         $("#details").addClass("error");
    }
    else {
         $("#details").removeClass("error");
    };
};

function init() {
    document.getElementById('submit').onclick = validateForm;
}

window.onload = init;