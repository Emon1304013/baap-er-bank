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
    }

})

// Case Withdraw 
//step#1: Withdraw button event listener
//step#2: Collect amount from withdraw field and check if it's less than 1 also greater than total balance
//step#3: Collect amount from current total withdraw
//step#4: Sum withdraw field amount and current total withdraw and update total withdraw field
//step#5: subtract current withdraw amount from total balance and update total balance

document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmount = parseFloat(withdrawField.value);

    console.log(withdrawAmount);
    let totalBalance = parseFloat(document.getElementById('total-balance').innerText);

    if(withdrawAmount > 1 && withdrawAmount < totalBalance)
    {
        let withdrawTotal = parseFloat(document.getElementById('total-withdraw').innerText);

        console.log(withdrawTotal);

        console.log(withdrawAmount);
        
        const total = withdrawTotal + withdrawAmount;

        console.log(total);

        document.getElementById('total-withdraw').innerText = total;

        totalBalance = totalBalance - withdrawAmount;

        document.getElementById('total-balance').innerText = totalBalance;
        

    }
    else{
        if(withdrawAmount < 1){
            alert("Sorry! You can't withdraw less than $1");
        }
        else if(withdrawAmount >= totalBalance)
        {
            alert("Sorry! Insufficient Balance");
        }
    }

    document.getElementById('withdraw-field').value = '';


})
