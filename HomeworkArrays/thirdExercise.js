// Write a JavaScript program to read ten array values, determine the largest value, and print it
let arrayNumbers = [ 12, 21, 45, 22, 10, 17, 33, 39, 44, 11];
function largestNumber (values) {
    let highestNum = 0;
    for (let i = 0; i < values.length; i+=1) {
        if (values[i] > highestNum) {
            highestNum = values[i];
        }
    }
    return highestNum;
}
console.log(largestNumber(arrayNumbers));
