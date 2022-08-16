// Case Deposit 


//step#1: Deposit button event listener
//step#2: Collect amount from deposit field
//step#3: Collect amount from current total deposit
//step#4: Sum deposit field amount and current total deposit and update total deposit field
//step#5: Update Total Balance Field

document.getElementById('btn-deposit').addEventListener('click',function(){

    let currentDepositAmount = parseInt(document.getElementById('deposit-field').value);

    if(currentDepositAmount > 0){
        console.log(currentDepositAmount);

        let totalDepositAmount = parseInt(document.getElementById('total-deposit').innerText);

        console.log(totalDepositAmount);

        const total = totalDepositAmount + currentDepositAmount;

        console.log(total);

        document.getElementById('total-deposit').innerText = parseInt(total);

        const totalBalance = document.getElementById('total-balance');

        let totalBalanceAmount = parseInt(totalBalance.innerText);

        totalBalanceAmount = totalBalanceAmount + currentDepositAmount;

        totalBalance.innerText = totalBalanceAmount;

        document.getElementById('deposit-field').value = '';      
    }
    else{
        alert("Please input a valid number");
    }

})

// Case Withdraw 
//step#1: Withdraw button event listener
//step#2: Collect amount from withdraw field and check if it's less than 1 also greater than total balance
//step#3: Collect amount from current total withdraw
//step#4: Sum withdraw field amount and current total withdraw and update total withdraw field
//step#5: subtract current withdraw amount from total balance and update total balance

document.getElementById('btn-withdraw').addEventListener('click',function(){

})
