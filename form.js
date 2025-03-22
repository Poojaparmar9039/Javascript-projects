let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");

function validateName() {
    let name = document.getElementById("contact-name").value;

    if (name.length == 0) {
        nameError.innerHTML = "Name is required";
        return false;
    }

    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = "valid";
    return true;
}


function validatePhone(){
    let phone =document.getElementById('contact-phone').value;

    if (phone.length == 0) {
        phoneError.innerHTML = "phone is required";
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = "phone no should be 10 digits";
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "only digits";
        return false;
    }
    phone.innerHTML ="valid";
    return true;
 
    
}


function validateEmail(){
    let email =document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.innerHTML ='Email is recquired';
        return false;
    }


    if(!email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML ='Email Invalid';
        return false;
    }

    email.innerHTML ="valid";
    return true;

}


function validateMessage(){
    let message =document.getElementById("contact-meassage").value;
    let required =30;
    let left =required- message.length;

    if(left > 0){
        messageError.innerHTML= left +' more characters required';
        return false;
    }

    message.innerHTML ="valid";
    return true;

}


function validateform(){
    if(!validateName() || validatePhone() || validateEmail() || validateMessage()){
        submitError.style.display='block';
        submitError.innerHTML='please fix the error';
        setTimeout(function(){submitError.style.display ='none';},3000)
        return false;
        }

}