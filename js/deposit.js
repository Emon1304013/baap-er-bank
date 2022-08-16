// Case Deposit 


//step#1: Deposit button event listener
//step#2: Collect amount from deposit field
//step#3: Collect amount from current total deposit
//step#4: Sum deposit field amount and current total deposit and update total deposit field
//step#5: Update Total Balance Field

document.getElementById('btn-deposit').addEventListener('click',function(){

    let currentDepositAmount = parseFloat(document.getElementById('deposit-field').value);
    

    if(currentDepositAmount > 0){
        console.log(currentDepositAmount);

        let totalDepositAmount = parseFloat(document.getElementById('total-deposit').innerText);

        console.log(totalDepositAmount);

        const total = totalDepositAmount + currentDepositAmount;

        console.log(total);

        document.getElementById('total-deposit').innerText = parseFloat(total);

        const totalBalance = document.getElementById('total-balance');

        let totalBalanceAmount = parseFloat(totalBalance.innerText);

        totalBalanceAmount = totalBalanceAmount + currentDepositAmount;

        totalBalance.innerText = totalBalanceAmount;

        document.getElementById('deposit-field').value = '';      
    }
    else{
        alert("Please input a valid number");
        document.getElementById('deposit-field').value = ''; 
    }

})