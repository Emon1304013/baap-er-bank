

// Case Withdraw 
//step#1: Withdraw button event listener
//step#2: Collect amount from withdraw field and check if it's less than 1 also greater than total balance
//step#3: Collect amount from current total withdraw
//step#4: Sum withdraw field amount and current total withdraw and update total withdraw field
//step#5: subtract current withdraw amount from total balance and update total balance

document.getElementById('btn-withdraw').addEventListener('click',function(){
    // const withdrawField = document.getElementById('withdraw-field');
    // const withdrawAmount = parseFloat(withdrawField.value);

    const currentWithdrawAmount =  getInputFieldValueById('withdraw-field');


    // let totalBalance = parseFloat(document.getElementById('total-balance').innerText);

    const previousTotalBalanceAmount = getElementValueById('total-balance');


    
    if(currentWithdrawAmount > 1 && currentWithdrawAmount < previousTotalBalanceAmount)
    {
        // let withdrawTotal = parseFloat(document.getElementById('total-withdraw').innerText);

        const previousWithdrawTotal = getElementValueById('total-withdraw');//function to get previous withdraw total amount




        // console.log(withdrawTotal);

        // console.log(withdrawAmount);
        
        const newWithdrawTotal = previousWithdrawTotal + currentWithdrawAmount;

        // console.log(total);

        // document.getElementById('total-withdraw').innerText = total;

        setElementValueById('total-withdraw',newWithdrawTotal);//function to set new total withdraw amount



        newTotalBalance = previousTotalBalanceAmount - currentWithdrawAmount;//function to get new total balance after withdrawal

        // document.getElementById('total-balance').innerText = newTotalBalance;

        setElementValueById('total-balance',newTotalBalance);//function to set newTotal Balance after withdrawal
        

    }
    else{
        // if(withdrawAmount < 1){
        //     alert("Sorry! You can't withdraw less than $1");
        // }
        // else if(withdrawAmount >= totalBalance)
        // {
        //     alert("Sorry! Insufficient Balance");
        // }

        alert("Sorry! Insufficient Balance");
    }


})
