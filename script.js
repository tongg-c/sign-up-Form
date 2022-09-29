const passwordInput = document.getElementById('password')
const confirmPassordInput = document.getElementById('confirm-password');
const submitButton = document.querySelector('.submit-section label')
const passwordErrorP = document.querySelector('.label-and-input p')

let confirmPassword;
let password;

passwordInput.addEventListener('keyup', e => {
    if(e.target.value === ""){
        return
    }
    password = e.target.value;
    checkPassword();
});

confirmPassordInput.addEventListener('keyup', e => {
    if(e.target.value === ""){
        return
    }
    confirmPassword = e.target.value;
    checkPassword();
});

function checkPassword(){
    if(passwordInput.value === undefined){
        return
    }
    if(confirmPassword.length < 6 || password.length < 6){
        passwordErrorP.textContent = '* Password needs to be at least 6 characters';

    } else {
        passwordErrorP.textContent = '* Passwords do not match';
    }

    if(confirmPassword !== password || confirmPassword.length < 6 || password.length < 6){
        passwordInput.classList.add('invalid');
        confirmPassordInput.classList.add('invalid');
        passwordErrorP.removeAttribute('hidden');
    } else {
        passwordInput.classList.remove('invalid');
        confirmPassordInput.classList.remove('invalid');
        passwordErrorP.setAttribute('hidden',true);
    }
}



submitButton.addEventListener('click', () =>{
    if(confirmPassword.length < 6 || password.length < 6){
        alert("Password has to be at least 6 characters");
        return
    }
    if(confirmPassword !== password){
        alert("Passwords do not match")
        return
    }
    if(confirmPassword === password){
        document.querySelector('form').submit();
    }
});
