//Adding JS styles

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    checkInput();
})

function checkInput(){
        //To get the values from the input
    
        const usernameValue = username.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        const password2Value = password2.value.trim();

        //username validation
        if(usernameValue === ''){
            setErrorFor(username, 'username cannot be blank');
}
        else if(usernameValue.length < 6){
            setErrorFor(username, 'username must be atleast 6 characters long');
        }
        else{
            setSuccessFor(username);
        }
        //email validation
        if(emailValue === ''){
            setErrorFor(email, 'email cannot be blank');
}
        else{
            setSuccessFor(email);
        }

       //password validation
       if(passwordValue === ''){
        setErrorFor(password, 'passwoord cannot be blank');
}
       else if(passwordValue.length < 6){
            setErrorFor(password, 'password must be atleast 6 characters long');
        }
        else{
            setSuccessFor(password);
        }

     //password2 validation
       if(password2Value === ''){
        setErrorFor(password2, 'confirm password cannot be blank');
}
   
    else if(password2Value !== passwordValue) {
        setErrorFor(password2, 'password mismatch');
    }
    else
    {
            setSuccessFor(password2);
        }
}

function setErrorFor(input, message){
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //Add error class
    formControl.className = 'form-control error';
}
function setSuccessFor(input) {
    const formControl = input.parentElement; //.form-control

    //Add error class
    formControl.className = 'form-control success';

}