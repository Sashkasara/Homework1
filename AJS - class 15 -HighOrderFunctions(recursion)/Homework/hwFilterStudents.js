// # Exercises

// ## Exercise 1
// There is a JSON file with students. Make a call to the file and get the following data from it: 
// * All students with an average grade higher than 3
// * All female student names with an average grade of 5
// * All male student full names who live in Skopje and are over 18 years old
// * The average grades of all female students over the age  of 24
// * All male students with a name starting with B and average grade over 2

// Use higher order functions to find the answers
// **Link:** https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json



// * All students with an average grade higher than 3
let averageGradeHigherThan3 = 
    arrayWithStudents.filter(student => student.averageGrade === 3)
                     .map(student => {
                         return {
                             firstName: student.firstName,
                             lastName: student.lastName,
                             averageGrade: student.averageGrade // vrakjanje samo na average grade
                         }
                     })
// console.log(averageGradeHigherThan3); 



// * All female student names with an average grade of 5
let allFemaleStudents = 
arrayWithStudents.filter(student => student.gender === "Female")
// console.log(allFemaleStudents)
                 .filter(student => student.averageGrade === 5)
                 .map(student => {
                    return {
                        firstName: student.firstName,
                        averageGrade: student.averageGrade
                    };
                });
// console.log(allFemaleStudents);



// * All male student full names who live in Skopje and are over 18 years old
let allMaleStudents = 
    arrayWithStudents.filter(student => student.gender === "Male")
                     .filter(student => student.city === "Skopje")
                     .filter(student => student.age > 18);
// console.log(allMaleStudents);



// * The average grades of all female students over the age  of 24
allFemaleStudentsAverage24 = 
    arrayWithStudents.filter(student => student.gender === "Female")
                     .filter(student => student.age > 24 )
                     .map( student => {
                         return{
                            firstName: student.firstName,
                            lastName: student.lastName,
                            averageGrade: student.averageGrade,
                         }
                     })
console.log(allFemaleStudentsAverage24)


// * All male students with a name starting with B and average grade over 2
let nameStartingWithB = 
    arrayWithStudents.filter(student => student.gender === "Male")
                     .filter(student => student.averageGrade === 2)
                     .filter(student => student.firstName.startsWith("B"))
console.log(nameStartingWithB);