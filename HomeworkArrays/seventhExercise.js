// Title: Looping structures

// Description: Write a JavaScript function that will return:
// The sum of the MAX and MIN numbers from an array with numbers
// Ex: arr = [3, 5, 6, 8, 11]
// Output: Max: 11, Min: 3, Sum: 14



function getNumbers(array) {
    let maxNumber = Math.max(...array);
    let minNumber = Math.min(...array);
    let sum = maxNumber + minNumber;
    console.log (`The number ${maxNumber} is the MAX number, the number ${minNumber} is the MIN number, and the sum is ${sum}`);
     
}
getNumbers(array = [ 5, 4, 56, 32, 60 ]);



// let array = [ 5, 4, 56, 32, 60, "What type is this"];
// function getNumbers() {
// i = 0;
// let maxNumber = Math.max(...array);
// let minNumber = Math.min(...array);
// let sum = maxNumber + minNumber;
// if (array[i] === Number) {
//     console.log (`The number ${maxNumber} is the MAX number, the number ${minNumber} is the MIN number, and the sum is ${sum}`);
// } else {
//     console.log("This is not a number")
// }
// return sum;
// }
// getNumbers ();