// Action: Write a JavaScript program that will read in a number and write out its digits
let sixNumbers = 123456;
let digits = [];
let numbers = sixNumbers.toString();
for (var i = 0, len = numbers.length; i < len; i += 1) {
    digits.push(+numbers.charAt(i));
}

console.log(digits);

//tuka samo refresh koga ke napravam mi gi dava brojcinjata so zapirki vo array, od odma ne.. ne znam zosto