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


//Prv del

let colorInput = document.getElementById("color");
let fontSizeInput = document.getElementById("fontSize");
let textInput = document.getElementById("text");


document.getElementById("button").addEventListener("click", function(){

    let textInput = document.getElementById("text");
    let fontSizeInput = document.getElementById("fontSize");
    let colorInput = document.getElementById("color");

    let header = document.createElement("h1");
    document.body.appendChild(header);

    header.innerHTML = `${textInput}`;
    header.style.fontSize = `${fontSizeInput}`;
    header.style.color = `${colorInput}`;


    let result = document.createElement("p");
    document.body.appendChild(result);



    

});

