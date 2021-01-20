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



// BONUS POINTS EXERCISE
// let arrayNumbers = [1, 2, 3, "Is this a number", 5];
// index = 0;
// function validateNumber () {
//     if ( numberArray[index] == !isNaN ) { // !isNan
//         console.log("This is a valid number")
//         index++;
//     }
//     else {
//         console.log("This is not a number")
//     }
// }
// validateNumber(arrayNumbers);

