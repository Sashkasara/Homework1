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

 let getAge = function(){

        let todayYear = new Date();
        let dateYear = yearOfBirth.getFullYear;
        let todayDateFullYear = todayYear.getFullYear;
        return(todayDateFullYear - dateYear);
    };
    console.log(getAge());

    this.getInfo = function() {
        return `This is student ${this.firstName} ${this.lastName} from the academy of ${this.academy}!`;
    }

    this.getGradesAverage = function(){
        for(let item of this.grades) {      // ne znam kako od inputi da izvadam array so grades, 
            result += item                  // probav da im dadam novi promenlivi kaj sto ke se smesteni grades
        }                                   // kako na primer student1 = [2,3,4,5] ama nikako ne mi iskaca i valjda presmetkata ne mi e tocna
        return result / this.grades.length;
    }

}
// Second part
let studentsArray = [];
function printStudents (array, element){
    element.innerHTML = "";
    for (let i = 0; i < array.length ; i++){
        element.innerHTML += `<li> ${studentsArray[i].getInfo()}</li>`;
    }
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
        
    }
})
