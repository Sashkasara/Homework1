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


function Student(firstName, lastName, birthYear, academy, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.academy = academy;
    this.grades = grades;


    this.getAge = function() {
        let todayYear = new Date();
        let dateYear = yearOfBirth.getFullYear;
        let todayDateFullYear = todayYear.getFullYear;
        let age =(todayDateFullYear - dateYear);
        return age;
    }


    this.getInfo = function() {
        return `This is student ${this.firstName} ${this.lastName} from the academy ${this.academy}!`;
    }


    this.getGradesAverage = function() {

        let sum = 0;
        for (let i = 0; i < this.grades.length; i++){
            sum += parseInt(this.grades[i], 10);
        }

        let average = sum/this.grades.length;
        let averageGrade = average.toFixed(2);

        return `Average grade: ${averageGrade}.`;
    }
}

let arrayWithStudents = [];


let firstStudent = new Student("Sashka", "Sarafinovska", 1994, "SEDC", [5, 1, 5, 2, 3, 4]);
arrayWithStudents.push(firstStudent);

let secondStudent = new Student("Emilija", "Jovanovska", 1990, "SEDC", [4, 4, 1, 5, 4, 3]);
arrayWithStudents.push(secondStudent);

let thirdStudent = new Student("Stefan", "Sarafinovski", 1991, "SEDC", [3, 1, 5, 4, 1, 4]);
arrayWithStudents.push(thirdStudent);


console.log(arrayWithStudents);

for (let i = 0; i < arrayWithStudents.length; i++) {
    console.log(`${i + 1}.${arrayWithStudents[i].getInfo()} \n  ${arrayWithStudents[i].getAge()} \n  ${arrayWithStudents[i].getGradesAverage()}`);
}