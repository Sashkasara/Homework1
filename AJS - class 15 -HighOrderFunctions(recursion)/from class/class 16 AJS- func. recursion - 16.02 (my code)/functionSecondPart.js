let sayHello = function(name) {return `Hello ${name}`};
console.log(sayHello); // print sayHello value
console.log(sayHello("Trajan"));

let mathOperationFunctionsArray = [
    num => num > 0 ? "positive" : "negative",
    num => num % 2 === 0 ? "Odd" : "even",
    num => num >= 0 ? num.toString().length : num.toString().length - 1
 ];
 console.log(mathOperationFunctionsArray[0](2));
 console.log(mathOperationFunctionsArray[1](2));
 console.log(mathOperationFunctionsArray[2](2));

 for (let i=1; i<50; i+=7) {
    //  for (let fnc of mathOperationFunctionsArray ){    // ili vaka ili so console dole
    //      console.log(fnc(i))
    //  }
    // console.log(mathOperationFunctionsArray[0](i));
    // console.log(mathOperationFunctionsArray[1](i));
    // console.log(mathOperationFunctionsArray[2](i));
 }

 //function as parameter in function 

//  function calculator (calculateFnc, num1, num2) {
//      return calculateFnc (num1, num2)
//  }
 
//  function sum(num1, num2) {
//      return num1 - num2;
//  }
//  let result = calculateFnc(sum, 3, 2)  // calculatorot ima 3 parametrni od koi prviot e funkcija a drugite dve se brojcinja
//  console.log(result)
//  let result2 = calculator(difference, 5, 3)
//  console.log(result2);
//  let result3 = calculator((num1, num2) => num1 * num2, 5, 5)
//  console.log(result3)
 

 function mathOperations(operation) { // funkcija sto vrakja funkcija
    switch (operation) {
        case "+":
            return function(number1, number2){ return number1 + number2};
        case "-":
            return function(number1, number2){ return number1 - number2};
        case "*":
            return (number1, number2) => number1 * number2; // moze i vaka :D
        default:
            console.log("Error");
            return null;
    }
 }
 let mathResult = mathOperations("+");
 console.log(mathResult(2,7));
 console.log(mathOperations("*")(5,5))


 // self invoked funcction that return function
 let someFnc = (function (){      // self-invoked
    let startPoint = 10;
    return function(num){
        startPoint += num;
        return num + startPoint;
    }
 })();
console.log(someFnc(5));
console.log(someFnc(10));
console.log(someFnc(15));


let generateId = (function() {
    return function (firstName, lastName){
        let obj = {
            firstName,
            lastName,
            id
        };
        id++;
        return obj;
    }
})();
for (let i=1; i< 10; i++) {
     let result = generateId (`Trajan -${i}`, `Stevkovski - ${i}`);
     console.log(result)
}