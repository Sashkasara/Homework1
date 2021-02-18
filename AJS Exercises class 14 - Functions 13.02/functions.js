// funtion without parameters
function someSimpleExample(){
    console.log("this is some dummy text")
    // let a = 5;
    // let b=6; // NE VRAKJA REZULTATI
    // let sum = a+b;
};
// calling fun. without parameters
someSimpleExample();


// defining fun with parameters
function getFullName (firstName, lastName) {
    return `${firstName} ${lastName}`
}
//calling fun with parameters
getFullName("Filip","Janev");
//getting result from function with parameters
let result = getFullName("Filip","Janev");
console.log(result);

// function with parameters and some logic
function sumofNumbers (numberOne, numberTwo){
    return numberOne + numberTwo;
    //the code after return will not be executed
    let difference = numberOne - numberTwo;S
};

//calling function with if statement
 if (getFullName("Filip", "Janev").length >= 20){
     console.log("This is long name")
 }
 else {
     console.log("This is short name")
 }

 // CALLING FUNCTION IN FUNCTION

function printDetails (firstName,lastName,mood){
    return `The person ${getFullName("Filip","Janev")} is feeling ${mood}`

}
console.log(printDetails("Filip","Janev","happy"));

// HOW NOT TO CALL FUNTION IN FUNCTION
function printDetails(firstName, lastName, mood){
    function getFullName(firstName,lastName){
        return `${firstName}${lastName}`;

    }
    return `the person ${getFullName(firstName,lastName)} is feeling ${mood}`
}

//ANONYMOUS FUNCTION
//adding anonymous function on variable

let greetings = function(name){
    return `Hello ${name}`;
}
console.log(greetings("Filip"));

//anon. function on button(addevent)
let button = document.getElementById("anonymousButton").addEventListener("click", function(){
    console.log("This is anonymous function event")
});

//ARROW FUNCTIONSSSSSS
//anonymous function
let logSomething = function (){
    console.log("Some message")
}
logSomething();
//arrow funtions
let logSomethingWithArrowFunction =() => console.log("Some message from arrow");
logSomethingWithArrowFunction();

//anonymous funciton with one parametar
let sum = function(number){
    return 15 + number
}


//Arrow FUNTIONS WITH ONE PARAMETER
let sumNumber = number => 15 + number; // number is parameter but because its one parameter, ne mu treba zagradi
console.log(sumofNumbers(12));

// ANONUMOYS FUN WITH 2 PARAMETERS
let sumOfTwoNumbers = function(number1, number2){
    return number1 + number2
}
console.log(sumOfTwoNumbers(12,11));
// ARROW FUNCTION WITH 2 PARAM
let sumOfTwoNumberss = (number1, number2) => number1 + number2;

// anonymousS FUNCTION WITH MORE CODE
let numbersSum = function(numberOne, numberTwo) {
    let result = numberOne + numberTwo;
    console.log(`The result is ${result}`)
};

//ARROW FUNCTION WITH MORE CODE

let numbersSumWithArrowFunctions = (numberOne, numberTwo) =>{
    let result = numberOne + numberTwo;
    console.log(`THE sum is ${result}`);

    return result;
}

//event listener with arrow function
let arrowButton= document.getElementById("arrowButton");
arrowButton.addEventListener("click",()=>{
    console.log("Event with arrow function detected");
})