document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositField = document.getElementById('deposite-field');
    const newDepositeAmountstring = depositField.value;
    const newDepositeAmount = parseFloat(newDepositeAmountstring);
    depositField.value = ''
    if(isNaN(newDepositeAmount)){
        
        alert ('Please provide a valid number');
        return;
    }
   

    // deposite current total ammount
    // for non input 
    const depositeTotalElement = document.getElementById('deposite-total')
    const previousDepositeTotalString = depositeTotalElement.innerText;
    const previousDepositeTotal = parseFloat(previousDepositeTotalString);
    depositeTotalElement.innerText = newDepositeAmount;

    const totalDeposite = previousDepositeTotal + newDepositeAmount;
    
    depositeTotalElement.innerText = totalDeposite; 
//  step5 :get balance current total
    const balance = document.getElementById('balance-add');
    const newAddBalanceString = balance.innerText;
    const newAddBalance = parseFloat(newAddBalanceString);

    const totalAddBalance = newAddBalance+totalDeposite;
     
    balance.innerText = totalAddBalance;



    // step 7 : clear the deposite field
    
})