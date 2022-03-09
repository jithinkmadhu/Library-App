var fname = document.getElementById("fname");
var phone = document.getElementById("phone");
var email = document.getElementById("email");
var pswd1 = document.getElementById("pswd1");
var pswd2 = document.getElementById("pswd2");

function emptyValidation(){
    if(fname.value.trim()=="" || phone.value.trim()=="" || email.value.trim()=="" || pswd1.value.trim()=="" || pswd2.value.trim()=="" ){
        alert("Fields cannot be empty");
        return false;
    }
    else{
        return true;
    }
}

function phoneValidation(){
    phoneError.innerHTML = "";

    let regexp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(regexp.test(phone.value)){
        return true;
    }
    else{
        phoneError.innerHTML = "Invalid Phone Number !!!!!!!";
        phoneError.style.color = "red";
        phone.style.border = "red solid 1px";
        return false;
    }
}


function emailValidation(){
    emailError.innerHTML = "";
    let regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(regexp.test(email.value)){
        return true;
    }
    else{
        emailError.innerHTML = "Invalid Email !!!!!!!!";
        emailError.style.color = "red";
        email.style.border = "red solid 1px";
        return false;
    }
}

function equalityOfPassword(){
    pswdError.innerHTML = ""
    if(pswd1.value == pswd2.value){
        return true;
    }
    else{
        pswdError.innerHTML = "Passwords didn't match !!!!!";
        pswdError.style.color = "red";
        pswd2.style.border = "red solid 1px";
        return false;
    }
}

function pswdType(){
    typeError.innerHTML = "";

    let regexp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if(regexp.test(pswd1.value)){
        return true;
    }
    else{
        typeError.innerHTML = "Password should contain<br>Minimum 8 characters<br>At least one uppercase and one lower case<br>At least one number and one special character";
        typeError.style.color = "red";
        pswd1.style.border = "red solid 1px";
        return false;
    }
}

function passwordStrength() {
    strength.innerHTML = "";

    var strength = document.getElementById('strength');
    var strongRegex = new RegExp("^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var enoughRegex = new RegExp("(?=.{8,}).*", "g");
    if (false == enoughRegex.test(pswd1.value)) {
        strength.innerHTML = '<br>More Characters';
    }
    else if (strongRegex.test(pswd1.value)) {
        strength.innerHTML = "<br><span style='color:green'>Strong Password!</span>";
        pswd1.style.border = "green solid 5px";
    }
    else if (mediumRegex.test(pswd1.value)) {
        strength.innerHTML = "<br><span style='color:orange'>Medium Password!</span>";
        pswd1.style.border = "orange solid 5px";
    }
    else {
        strength.innerHTML = "<br><span style='color:red'>Weak Password!</span>";
        pswd1.style.border = "red solid 5px";
    }
}