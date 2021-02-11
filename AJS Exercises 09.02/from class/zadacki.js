// # Exercises
// ## Generating arrays
// * Generate an array that has all the numbers that are divisible by 3 from 1 to 1000
// * Generate an array that has all the even numbers that are divisible by 4 from 1 to 1000
// * Generate an array that has all the numbers that end with the digit 1 from 1 to 1000
// ## Clean arrays
// * Create a function that cleans an array of any values and leaves only STRINGS
// * Create a function that cleans an array of any values and leaves only NUMBERS
// * Create a function that cleans undefined, null, NaN and "" and leaves all other values
// * Test arrays:
// ```js
// let test = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22];
// ```

let numbers =[];
for ( let i = 0; i < 1000; i++){
    if ( i % 3=== 0){
        numbers.push(i);
    }
}
console.log(numbers);

let arrayDivBy4 = [];
for (let i = 0; i< 1000; i++) {
    if (i % 4 === 0){
        arrayDivBy4.push(i)
    }
}
console.log(arrayDivBy4);


let thirdArray = [];
for (let m=1; m<=1000; m++){
    if(m % 10 === 1){
        thirdArray.push(m);
    }
    
}
console.log(thirdArray);



// VTOR DEL
// ## Clean arrays
// * Create a function that cleans an array of any values and leaves only STRINGS
// * Create a function that cleans an array of any values and leaves only NUMBERS
// * Create a function that cleans undefined, null, NaN and "" and leaves all other values
// * Test arrays:
// ```js
// let test = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22];
// ```
let test = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22];

let stringOnly = (val) => {
    if (typeof(val) === " " ) {     
      return val;
    }
  }

  let string = test.filter(stringOnly);
  document.write(string);



let numbersOnly = (val) => {
    if (typeof(val) === 'number') {      // replace number with string to get only string values in an array.
      return val;
    }
  }

  let numberss = test.filter(numbersOnly);
  document.write(numberss);

// OVIE GORE SE MOITE ... 



  function cleaning(test) {
    for (let i = 0; i < test.length; i++) {
      if (typeof test[i] === "string" && test[i] !== '') { // NA TOMISLAV
        test.splice(i, 1);
      }
    }
    return test;
  }
  console.log(cleaning(test));



function cleanArrayOfValues(array) { 
    let newArray = [];  // na GORAN
    for(let item of array) {
        if(typeof(item) === 'string' && item !== "") {
            newArray.push(item);
        }
    }
}
let testCleared = cleanArrayOfValues(test);
console.log(testCleared);


function removeAllButNumbers ( inputArray ) {
    let newArray = [];
    for (let i of test) {
        if(typeof i === 'number' && !Number.isNaN(i) ){ //  NA OLGA
            newArray.push(i);
        }
    }
    return newArray;
}
console.log(removeAllButNumbers(test));



function removeAllButNumbersV2 (inputArr) {
    let parsedArray = [];
    for(let i=1; i < test.length; i++) {     // NEDOVRSENAAAA
        if (typeof test[i] === "string" && test[i] !=="") {            // na BILJANA za prvoto
            test.push(inputArr[i]);
        }
       }
}
   console.log(test);



   // * Create a function that cleans undefined, null, NaN and "" and leaves all other values
   function removeFalsyValues (inputArr) {
    let parsedArray = [];
    for (let element of inputArr) {
        //12 -> false
        // "" -> true -  true
        //false --> false
        if (!element && typeof element === "boolean"){
            continue;
        }
        parsedArray.push(element);
    }
    return parsedArray;
   }
   console.log(removeFalsyValues(test))