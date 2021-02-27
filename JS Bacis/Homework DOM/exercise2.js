var arrayNumbers = [12, 93, 80, 11, 9, 10, 55, 46, 20];

let body = document.querySelector('body');
body.innerHTML += `<div><ul id="numberlist"></ul></div>`;
body.innerHTML += `<div id="forResult"></div>`;

let list = document.getElementById('numberlist');
var resultPrint = document.getElementById('forResult');

function sumOfNumbers(array) {
    let result = 0;
    let i = 0;
    while (i < array.length) {
        result += array[i];
        list.innerHTML += `<li>${array[i]}</li>`;
        resultPrint.innerText = `The sum of the numbers is:${result}`;
        i++;
    }
}
sumOfNumbers(arrayNumbers);
