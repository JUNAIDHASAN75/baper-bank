document.getElementById('bank-btn').addEventListener('click', function(){
    const emailField = document.getElementById('email-type');
    const email = emailField.value;
    
    
    const passwordField = document.getElementById('password-type');
    const password = passwordField.value;

    if(email === 'junaid@hasan.com' && password === 'tumikijano'){
        window.location.href = 'bank.html';
    }
    else{
        alert('tui passwrd vul korsos . jah tore teijjo sontan korlam');
    }
    emailField.value = ''
    passwordField.value = ''
})