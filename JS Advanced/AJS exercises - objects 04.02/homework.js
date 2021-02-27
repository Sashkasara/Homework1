// ## Student constructor function
// * Create a constructor function for Student objects with:
//   * Properties:
//     * firstName
//     * lastName
//     * birthYear
//     * academy 
//     * grades - array of numbers
//   * Methods:
//     * getAge() - returns age of student
//     * getInfo() - returns "This is student firstName* lastName* from the academy academy*!"
//     * getGradesAverage() - returns the average of the student grades
// * Create an array with 3 students
// ## Student signup
// * Create a form with first name, last name, birth year and academy
// * Create a button for signing up
// * The button should create a new Student object and add it in the array of students



let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let yearOfBirth = document.getElementById("yearOfBirth");
let academy = document.getElementById("academy");
let save = document.getElementById('save');
let studentList = document.getElementById('list');

// First part
function Students (firstName, lastName, yearOfBirth, academy, studentGrades) {

this.firstName = firstName;
this.lastName = lastName;
this.yearOfBirth= yearOfBirth;
this.academy = academy;
this.grades = studentGrades;

this.getAge = function(){

    let todayYear = new Date();
    let dateYear = yearOfBirth.getFullYear;
    let todayDateFullYear = todayYear.getFullYear;
    let age =(todayDateFullYear - dateYear);
    return age;
    };
    console.log(this.getAge());

this.getInfo = function() {
        return `This is student ${this.firstName} ${this.lastName} Age:${this.age} from the academy of ${this.academy}!`;
    }

this.getGradesAverage = function(){
    let sum = 0;
    for (let i = 0; i < this.grades.length; i++){
        sum += parseInt(this.grades[i], 10);                 
        } 
    let average = sum/this.grades.length;
    let averageGrade = average.toFixed(2);                               
    return `The average grade is: ${averageGrade}.`;
    }

}
// Second part // printing
let studentsArray = [];
function printStudents (array, element){
    element.innerHTML = "";
    for (let i = 0; i < array.length ; i++){
        element.innerHTML += `<li> ${studentsArray[i].getInfo()}}</li>`;
    }
}
function clearForm() {
    firstName.value = "";
    lastName.value = "";
    yearOfBirth.value = "";
    academy.value = "";
}

save.addEventListener('click', function(){
    
    if(!firstName.value || !lastName.value || !yearOfBirth.value || !academy.value){
        alert(`All fields required`)
        return;
    }
    else {
        studentsArray.push(new Students
        (firstName.value, lastName.value, parseInt(yearOfBirth.value), academy.value))
        printStudents(studentsArray, studentList);
        clearForm();
    }
})
