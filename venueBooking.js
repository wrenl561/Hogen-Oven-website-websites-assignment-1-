function validateForm() {
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var date = document.getElementById('date');
    var details = document.getElementById('details');

    if (name.value == "") {
        $("#name").addClass("error");
        $("#name").after("Some text after");
    }
    else {
        $("#name").removeClass("error");
    };
    if (email.value == "") {
        $("#email").addClass("error");
        alert("email is empty");
    }
    else {
        $("#email").removeClass("error");
    };
    if (date.value == "") {
        $(#date).addClass("error");
        alert("date is empty");
    }
    else {
        $(#date).removeClass("error");
    };
    if (details.value == "") {
         $(#details).addClass("error");
        alert("details is empty");
    }
    else {
         $(#details).removeClass("error");
    };
};

function init() {
    //document.getElementById('booking').onsubmit = validateForm;
    alert("test")
    $("#name").addClass("error");
    alert("test");
}

window.onload = init;