let input = parseInt(prompt("Enter a number:"));
let listArray = [2, 5, 6, 3, 5, 5, 2, 5, 7, 8, 2];
function numberArray(number, array) {
    let occurences = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] === number){
            occurences++;
        }
    }
    return occurences;
}
console.log(`There are ${numberArray(input, listArray)} occurences of ${input} in the array!`);