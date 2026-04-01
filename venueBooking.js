function validateForm() {
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var date = document.getElementById('date');
    var details = document.getElementById('details');

    if (name.value == "") {
        alert("is empty");
    }
}

function init() {
    document.getElementById('booking').onsubmit = validateForm;
    
}

window.onload = init;