let userInput = prompt ("Enter your birthday mm/dd/yyyy");

let convertedToNumber = parseInt(userInput);

let stringFormatedDate = userInput.match(/(\d\d)(\d\d)(\d\d\d\d)/);

let todayDate = new Date();

let date = new Date(stringFormatedDate[3], stringFormatedDate[1] - 1, stringFormatedDate[2]);

let dateDate = date.getDate();
let dateMonth = date.getMonth() +1;
let dateYear = date.getFullYear();

let todayDateDate = todayDate.getDate();
let todayDateMonth = todayDate.getMonth() +1;
let todayDateFullYear = todayDate.getFullYear();

if (todayDateFullYear - dateYear > 18) {
    console.log ("polnoleten");
} else if ( todayDateFullYear - dateYear <= 17) {
    console.log("maloleten");
}
