// 1. Create a javascript function that will find all numbers divisable by 7 and 3 in a array from 1 to 100.


function division(array){
    let newArray = [];
    for (let i = 1 ; i <= 100; i++){
        if (i % 3 === 0 && i % 7 === 0){
            newArray.push([i])
        }
    }
    return console.log (newArray);
}
division([]);

// 2. Create a Javascript ATM machine. 
// The ATM should have the following functions:
// - make desposit (this function should add money to the users balance)
// - make withdrawal (this function should should withdraw money to the users balance)
// - get the balance (this function should display the current balance of the user)
// - exit (this function should close the window)
// create interactive menu using alerts

const atmMoney = 10000;



function allFuntions (atmMoney){
    let addMoney =  Number (prompt ("How much money would you like to add?"));
    let withdrawMoney = Number (prompt("How much money would you like to withdraw"));
    

    function addMoneyFunction (addMoney) {
        howMuchMoney = (atmMoney + addMoney)
        console.log(howMuchMoney);
        return howMuchMoney;
        
        
    };
    addMoneyFunction(addMoney)
   
   
   function withdrawMoneyFunction (withdrawMoney) {
        moneyLeft = (atmMoney - withdrawMoney) % atmMoney;
        console.log(moneyLeft);
        return moneyLeft;
   }
   
   withdrawMoneyFunction(withdrawMoney)
   
   function getBalance (){


   // console.log("Your balance is")
   }
   
   function exit (){
   
   }

}

allFuntions(atmMoney)
