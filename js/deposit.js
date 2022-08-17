// Case Deposit 
//step#1: Deposit button event listener
//step#2: Collect amount from deposit field
//step#3: Collect amount from current total deposit
//step#4: Sum deposit field amount and current total deposit and update total deposit field
//step#5: Update Total Balance Field

document.getElementById('btn-deposit').addEventListener('click',function(){

    // let newDepositAmount = parseFloat(document.getElementById('deposit-field').value);
    const newDepositAmount = getInputFieldValueById('deposit-field');//FUCNCTION FOR GETTING DEPOSIT INPUT
    
    if(newDepositAmount > 0 && typeof(newDepositAmount) === 'number'){
    
        // let previousTotalDepositAmount = parseFloat(document.getElementById('total-deposit').innerText);

        const previousTotalDepositAmount = getElementValueById('total-deposit');//FUNCTION FOR GETTING PREVIOUS TOTAL DEPOSIT

        // console.log(previousTotalDepositAmount);

        const newTotalDepositAmountTotal = parseFloat(previousTotalDepositAmount + newDepositAmount)


        // document.getElementById('total-deposit').innerText = newTotalDepositAmountTotal;

        setElementValueById('total-deposit',newTotalDepositAmountTotal);//FUNCTION FOR SETTING THE NEW TOTAL DEPOSIT VALUE


        // const totalBalance = document.getElementById('total-balance');

        // let totalBalanceAmount = parseFloat(totalBalance.innerText);

        const previousTotalBalance = getElementValueById('total-balance');//function to get previous total balance 

        const totalBalanceAmount = previousTotalBalance + newDepositAmount;

        // totalBalance.innerText = totalBalanceAmount;

        setElementValueById('total-balance',totalBalanceAmount);//function to set the total balance after deposit

        // document.getElementById('deposit-field').value = '';      
    }
    else{
        alert("Please input a valid number");
        document.getElementById('deposit-field').value = ''; 
    }

})