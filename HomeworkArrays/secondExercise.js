function sumOfNumbers (a) {
let total = 0;
for(let i in a) { 
    total += a[i];
}
console.log(total);
}
let fiveNumbers = [ 1, 2, 3, 4, 5]
sumOfNumbers(fiveNumbers);

// Write a function that will take an array of 5 numbers as an argument and return the sum.Print it in the console or in alert



//Bonus points exercise
function validateNumber (arrayNumbers) {
    for (let i = 0; i <= arrayNumbers.length; i++ ) {
        if (typeof arrayNumbers[i]  === 'number' || arrayNumbers[i] === !isNaN ) {
            console.log("This number " + arrayNumbers[i] + " is a number");     
        }
        else {
            console.log("This is not a valid number")
        }
    }
    
}
validateNumber([1, 2, 3, "Is this a number", 5]);
