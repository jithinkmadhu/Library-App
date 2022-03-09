const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");
const error = document.getElementById("error");

form.addEventListener('submit', (e) => {
    let messages = []

    if(email.value.trim()=="" || password.value.trim()==""){
        messages.push("Fields cannot be empty!!");
    }

    let regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(regexp.test(email.value)){
        return true;
    }
    else{
        messages.push("Invalid Email!!");
    }

    if (messages.length > 0){
        e.preventDefault();
        error.innerHTML = messages.join('<br> ');
    }
    
});