// Make 3 functions:
// 1. Function that takes a number through a parameter and returns how many digits that number has
// 2. Function that takes a number through a parameter and returns if its even or odd
// 3. Function that takes a number through a parameter and returns if its positive or negative
// Create a function that takes a number through a parameter and calls all three functions for the number that was passed. 
// It should show the results in the console. 

// function howManyDigits (number) {
//     let counter = 0;
//     while (number > 0) {
//         number = parseInt(number/10);
//         counter = counter +1
//     }
//     console.log(counter);
    
// }
// howManyDigits(1223);



function howManyDigits(number){
    let digits = number.toString().length;
    console.log(digits);
}
howManyDigits(1223);

function evenOrOdd (number){
 if (number%2 == 0) {
     console.log("This number is even")
 } 
 else {
     console.log("This number is odd")
 }
}
evenOrOdd(122);

function positiveOrNegative (number){
    if(number > 0){
        console.log("This number is positive")
    }
    else {
        console.log("This number is negative")
    }
}
positiveOrNegative(22);

function callAllFunctions (callAllFunctions){
    howManyDigits(number);
    evenOrOdd(number);
    positiveOrNegative(number);
}
// callAllFunctions(3);