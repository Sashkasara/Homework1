
const atmMoney = 10000;
let enterNumber =  Number (prompt ("How much money would you like to withdraw?"));
function withdrawnMoney (insertedNumber) {
    moneyLeft = (atmMoney - insertedNumber) % atmMoney;
    if (insertedNumber > atmMoney) {
        console.log("Not enough money")
    } else if (insertedNumber < atmMoney ) {
        console.log(`You have withdrawn ${enterNumber} dollars and you have left ${moneyLeft} dollars`);
    }
}

withdrawnMoney (3000);
