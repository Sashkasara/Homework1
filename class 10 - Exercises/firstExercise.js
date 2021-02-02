// 1. Create a javascript function that will find all numbers divisable by 7 and 3 in a array from 1 to 100.


function AllNumbers() {
    var result = [];
    for (let i= 1; i<101 ; i++) {
        if (i % 3 === 0 && i % 7 === 0 ) {
        
            result.push(i);          
        }

    }
    console.log(result);
}
var newArray = AllNumbers();
// 2. Create a Javascript ATM machine. 
// The ATM should have the following functions:
// - make desposit (this function should add money to the users balance)
// - make withdrawal (this function should should withdraw money to the users balance)
// - get the balance (this function should display the current balance of the user)
// - exit (this function should close the window)
// create interactive menu using alerts

// const atmMoney = 10000;



// function allFuntions (atmMoney){
//     let addMoney =  Number (prompt ("How much money would you like to add?"));
//     let withdrawMoney = Number (prompt("How much money would you like to withdraw"));
    

//     function addMoneyFunction (addMoney) {
//         howMuchMoney = (atmMoney + addMoney)
//         console.log(howMuchMoney);
//         return howMuchMoney;
        
        
//     };
//     addMoneyFunction(addMoney)
   
   
//    function withdrawMoneyFunction (withdrawMoney) {
//         moneyLeft = (atmMoney - withdrawMoney) % atmMoney;
//         console.log(moneyLeft);
//         return moneyLeft;
//    }
   
//    withdrawMoneyFunction(withdrawMoney)
   
//    function getBalance (){


//    // console.log("Your balance is")
//    }
   
//    function exit (){
   
//    }

// }

// allFuntions(atmMoney)


var balance = 1000;
atm();
function atm(){
    var userFunction = prompt(`Please enter 
    1. Deposit
    2. Withdrawal
    3. Balance
    4. Exit`);
if (userFunction === "Deposit") {
    var inputDeposit = Number(prompt("please enter the amount you want to deposit"));
    if (typeof(inputDeposit) === 'number' && !isNaN(inputDeposit)) {
        let deposit = inputDeposit;
        balance += deposit;
        console.log(`You deposited ${deposit}. Balance account = ${balance}`);      
    }
    else {console.log('please write only numbers')};
};
if (userFunction === 'Withdrawal') {
    var withdrawal = 0;
    var inputWithdrawal = Number(prompt("please enter the amount you want to withdrawal"));
    if (typeof(inputWithdrawal) === 'number' && !isNaN(inputWithdrawal)) {
        withdrawal = inputWithdrawal;
       if (withdrawal <= balance) {
           balance = balance - withdrawal;
           console.log(`you have witdrawn ${withdrawal}. Balance account = ${balance}`);
       }
       else if (withdrawal > balance) {
           console.log('you dont have enough money on your account');
       }         
    }
    else {'please write only numbers'};
};
if (userFunction === 'Balance') {
    console.log(`Your account balance is ${balance}`);
};
if (userFunction === 'Exit') {
    alert('Thank you for using our ATM');
    return;
}
else {atm()};
}
