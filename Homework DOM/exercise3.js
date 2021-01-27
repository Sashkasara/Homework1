  
let recipe = prompt("What is the name of the recipe");
let numberOfIngridients = parseInt(prompt("How many ingredinets you will use"));

let bodyElements = document.querySelector('body');

bodyElements.innerHTML += `<h1>${recipe}</h1>`;
bodyElements.innerHTML += '<div><ul id="listOfIngredients"></ul></div>';
let list = document.getElementById('listOfIngredients');
console.log(list);


let i = 1;
while (i <= numberOfIngridients) {
    let ingredient = prompt(`Please type ingredient number${i}`)
    list.innerHTML += `<li>${ingredient}</li>`;
    i++;
}
