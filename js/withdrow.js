document.getElementById('withdrow-btn').addEventListener('click',function(){
    const newWithdrowField = document.getElementById('Withdrow-field');
    const newWithdrowFieldString = newWithdrowField.value;
    const newWithdrow = parseFloat(newWithdrowFieldString);
    newWithdrowField.value =''
    if(isNaN(newWithdrow)){
        alert ('Please provide a valid number');
        return;
    }


    
    const balance = document.getElementById('balance-add');
    const newAddBalanceString = balance.innerText;
    const newAddBalance = parseFloat(newAddBalanceString);
    

    if(newWithdrow > newAddBalance){
        alert('baper bank a eto taka nai')
        return;
      }

    const withdrawBalance = newAddBalance - newWithdrow;
     balance.innerText = withdrawBalance;


    // step 3 withdraw part
    const withdrawField = document.getElementById('withdrow');
    const withdrawFieldString = withdrawField.innerText;
    const withraw = parseFloat(withdrawFieldString)
      
    const totalWithdraw = newWithdrow+ withraw;
    withdrawField.innerText = totalWithdraw;

//  clear the  withdraw field
 

})