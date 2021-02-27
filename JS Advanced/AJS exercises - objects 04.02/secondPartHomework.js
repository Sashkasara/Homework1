// ## Student signup
// * Create a form with first name, last name, birth year and academy
// * Create a button for signing up
// * The button should create a new Student object and add it in the array of students


// ## Student signup
// * Create a form with first name, last name, birth year and academy
// * Create a button for signing up
// * The button should create a new Student object and add it in the array of students



let buttonSignUp = document.getElementById("signUp");
let result = document.getElementById("result");
let message = document.getElementById("print");

let firstNameInput = document.getElementById("firstName");
let lastNameInput = document.getElementById("lastName");
let birthYearInput = document.getElementById("birthYear");
let academyInput = document.getElementById("academy");

let arrayStudents = [];

function Student(studentFirstName, studentLastName, studentBirthYear, studentAcademy) {

    this.firstName = studentFirstName;
    this.lastName = studentLastName;
    this.birthYear = studentBirthYear;
    this.academy = studentAcademy;

    this.getInfo = function() {
        return `Student: ${this.firstName} ${this.lastName}, <br>
        Year of Birth: ${this.birthYear} <br>
        From the academy of: ${this.academy}`;
    }
}

buttonSignUp.addEventListener("click", function() {
    let firstName = firstNameInput.value;
    let lastName = lastNameInput.value;
    let birthYear = birthYearInput.value;
    let academy = academyInput.value;

    if (!firstName || !lastName || !birthYear || !academy) {
        showMessage("Please enter valid values.", message);
    } else {
        let student = new Student(firstName, lastName, birthYear, academy);
        arrayStudents.push(student);
        printArrayStudents(arrayStudents, result);
        clearForm();

        console.log(arrayStudents);
    }

});

function printArrayStudents(arrayStudents, element) {
    element.innerHTML = '';

    let html = "";
    for (let i = 0; i < arrayStudents.length; i++){
        html += `<p>${i + 1}. ${arrayStudents[i].getInfo()}</p>`;
    }

    element.innerHTML = html;
}

function clearForm() {
    firstNameInput.value = "";
    lastNameInput.value = "";
    birthYearInput.value = "";
    academyInput.value = "";
}

function showMessage(message, element) {
    element.innerHTML = "";
    element.innerHTML = `<p>${message}</p>`;
}