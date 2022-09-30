const passwordInput = document.getElementById('password')
const confirmPassordInput = document.getElementById('confirm-password');
const submitButton = document.querySelector('.submit-section label')
const passwordErrorP = document.querySelector('.label-and-input p')

let confirmPassword = '';
let password = '';

passwordInput.addEventListener('keyup', e => {
    password = e.target.value;
    checkPassword();
});

confirmPassordInput.addEventListener('keyup', e => {
    confirmPassword = e.target.value;
    checkPassword();
});

function checkPassword(){
    if(confirmPassword.length < 6 && password.length < 6){
        passwordErrorP.textContent = '* Password needs to be at least 6 characters';
        passwordErrorP.removeAttribute('hidden');
        passwordInput.classList.add('invalid');
        confirmPassordInput.classList.add('invalid');
    } else if(confirmPassword !== password){
        passwordErrorP.textContent = '* Passwords do not match';
        passwordErrorP.removeAttribute('hidden');
        passwordInput.classList.add('invalid');
        confirmPassordInput.classList.add('invalid');
    } else {
        passwordInput.classList.remove('invalid');
        confirmPassordInput.classList.remove('invalid');
        passwordErrorP.setAttribute('hidden', true);
    }
}

submitButton.addEventListener('click', () =>{
    if(confirmPassword.length < 6 || password.length < 6) alert("Password has to be at least 6 characters");
    else if(confirmPassword !== password) alert("Passwords do not match");
    else document.querySelector('form').submit();
});
