console.log("Bank Connected");

document.getElementById('btn-submit').addEventListener('click',function(){
    const userEmail = document.getElementById('user-email').value;
    const userPassword = document.getElementById('user-password').value;

    if(userEmail === 'emon@gmail.com' && userPassword ==='emon123'){
        // window.location.href = "bank.html";
        window.open('bank.html', '_blank');
    }
    else{
        alert("Please type a valid email/password")
    }
})