function sumPow(firstNumber, secondNumber){
let result = 0;
let i = firstNumber;
while(i <= secondNumber){
result += Math.pow(i, 2);
i++ }
return result;
}
        
console.log(sumPow(2, 21)); 
console.log(sumPow(55, 90)); 