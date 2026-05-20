function validateForm(event) {

    event.preventDefault(); // STOP page refresh

    var name = document.getElementById('fullname');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var address = document.getElementById('address');
    var cardName = document.getElementById('cardname');
    var cardNumber = document.getElementById('cardnumber');
    var expiryDate = document.getElementById('expiry');
    var cvv = document.getElementById('cvv');

    var validFlag = true;

    if (name.value == "") {
        $("#fullname").addClass("error");
        validFlag = false;
    }
    else {
        $("#fullname").removeClass("error");
    }

    if (email.value == "") {
        $("#email").addClass("error");
        validFlag = false;
    }
    else {
        $("#email").removeClass("error");
    }

    if (phone.value == "") {
        $("#phone").addClass("error");
        validFlag = false;
    }
    else {
        $("#phone").removeClass("error");
    }
    
    if (address.value == "") {
        $("#address").addClass("error");
        validFlag = false;
    }
    else {
        $("#address").removeClass("error");
    }

    if (cardName.value == "") {
        $("#cardname").addClass("error");
        validFlag = false;
    }
    else {
        $("#cardname").removeClass("error");
    }

    if (cardNumber.value == "") {
        $("#cardnumber").addClass("error");
        validFlag = false;
    }
    else {
        $("#cardnumber").removeClass("error");
    }

    if (expiry.value == "") {
        $("#expiry").addClass("error");
        validFlag = false;
    }
    else {
        $("#expiry").removeClass("error");
    }

    if (cvv.value == "") {
        $("#cvv").addClass("error");
        validFlag = false;
    }
    else {
        $("#cvv").removeClass("error");
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