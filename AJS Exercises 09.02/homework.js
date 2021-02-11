// # Exercises
// ## Title Generator
// * Create 3 inputs:
//   * Color
//   * FontSize
//   * Text
// * Create a button for generating titles
// * When the button is clicked generate a new h1 element with the color, font size and text from the inputs
// ## List Generator
// * Create 3 inputs:
//   * Color
//   * FontSize
//   * Items
// * Create a button for generating unordered lists
// * When the button is clicked generate a new ul element with the color, font size and items from the inputs 
// > Items should be added separated by , in the input

let colorInput = document.getElementById("color");
let fontSizeInput = document.getElementById("fontSize");
let textInput = document.getElementById("text");

let body = document.getElementsByTagName("body")


document.getElementById("button").addEventListener("click", function(){
    colorInput.style.color = "blue";
    color = colorInput.value;

    fontSizeInput.style.fontSize = "x-large";
    fontSize = fontSizeInput.value;

    text = textInput.value;
    document.body.innerHTML += `<h1>${fontSize} ${color} ${text}</h1>`

});

document.getElementById("uoList").addEventListener("click", function(){

})

