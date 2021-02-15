// # Exercises
// ## Title Generator
// * Create 3 inputs:
//   * Color
//   * FontSize
//   * Text
// * Create a button for generating titles
// * When the button is clicked generate a new h1 element with the color, font size and text from the inputs


let color = document.getElementById('color');
let fontSize = document.getElementById('font-size');
let text = document.getElementById('text');
let result = document.getElementById('result');
let button = document.getElementById('button');

button.addEventListener('click', function(){
  result.innerHTML = "";
  result.innerHTML += `
    <h1 style="color:${color.value};
    font-size:${fontSize.value}px;">
    ${text.value}</h1>`
    clearInput(color, fontSize, text);
});

function clearInput(input1, input2, input3){
  input1.value = "";
  input2.value = "";
  input3.value = "";
}

/* ## List Generator
* Create 3 inputs:
  * Color
  * FontSize
  * Items
* Create a button for generating unordered lists
* When the button is clicked generate a new ul element with the color, font size and items from the inputs 
> Items should be added separated by , in the input */

let secondColor = document.getElementById('secondColor');
let secondFontSize = document.getElementById('secondFontSize');
let secondText = document.getElementById('secondText');
let secondResult = document.getElementById('secondResult');
let secondButton = document.getElementById('secondButton');

//split
function arrayItems(input){
  return array = input.split(",");
}

//print
let listConstructor = function(array, element, color, fontSize){
  for(let item of array){
    element.innerHTML += `<li style="color:${color};font-size:${fontSize}px">${item}</li>`
  }
};
secondButton.addEventListener('click', () => {
  let i = 0;
  let items = arrayItems(secondText.value);
  secondResult.innerHTML += `<ul id="list${i}"></ul>`
  
  listOfElements = document.getElementById(`list${i}`);
  listConstructor(items, listOfElements, secondColor.value, secondFontSize.value);
  clearInput(secondColor, secondFontSize, secondText);
  i++;
});

    



