let students1 = [
    { firstName: "Bob", lastName: "H", grade: 5, age: 19 }, // ti treba druga sktipta so studentite
    { firstName: "Mel", lastName: "B", grade: 2, age: 33 },
    { firstName: "Jill", lastName: "M", grade: 3, age: 15 },
    { firstName: "Lucky", lastName: "J", grade: 5, age: 18 },
    { firstName: "Strike", lastName: "K", grade: 4, age: 16 },
    { firstName: "Eric", lastName: "I", grade: 1, age: 17 }
];

for (let student of students) {
    console.log(`${student.firstName} ${student.lastName}`);
}
function logFullName(student){
    console.log(`${student.firstName} ${student.lastName}`);
}
students1.forEach(logFullName);

students1.forEach(function (student){
    console.log(`${student.firstName} ${student.lastName}`); // ova i toa pogore se isti
});

//filter
let above18 = [];
for (let i =0; i< students1.length; i++) {
    if (students1[i].age >= 18){
        above18.push >= 18
    }
}
console.log(above18);
 // ova istoto samo so high ordered function 
 function above18Check (student) {
     return student.age >= 18
 };

 let studentsAbove18 =  students1.filter(above18Check);
//  console.log(studentsAbove18);                            // znaci se poskraten i poskraten kod

 let studentsAbove18v1 = students1.filter(student => student.age >= 18);
//  console.log(studentsAbove18v1);

let studentsAbove18WithGradeBiggerThanFour = students1
    .filter(student => student.age >= 18) //filter vrakja sekogas niza
    .filter(student => student.grade > 4)
// console.log(studentsAbove18WithGradeBiggerThanFour);



let students2 = [
    {firstName: "Bob", lastName: "H", grades: [
        {subject: "Math", grade: 2},
        {subject: "Science", grade: 3}
    ], age: 19},
    {firstName: "Mel", lastName: "B", grades: [
        {subject: "Math", grade: 3},
        {subject: "Science", grade: 5}
    ], age: 33}
]

students2
 .forEach(student => // ja vrtime cela niza
    student.grades.filter(grade => // gi filtritame sote studenti so ocenki// studenti koi sto imaat ocenka 5ka
        grade.grade === 5)// ocenka 5ka
        .forEach(grade1 => // posle toa na niv foreach i gi pechatime vo konzola 
            console.log(`${grade1.subject}: ${grade1.grade}`)))


let mapeData = [];
for (let student of students2){
    let mapestudent ={
        firstName: student.firstName,
        age: student.age
    };
    mapeData.push(mapestudent);
}
console.log(mapeData);

let mappedStudents = students2.map(student => { // ova istoto so toa gore// nad ova
    return {
        firstName: student.firstName,
        age: student.age
    };
})
console.log(mappedStudents);

let studentss = [
    {name: "Bob", grade: 2},
    {name: "Jill", grade: 3},
    {name: "Greg", grade: 1},
    {name: "Ann", grade: 5},
    {name: "Bill", grade: 4},
    {name: "Jane", grade: 4},
];

let sumOfGrades = studentss.reduce((sum, student) => sum += student.grade, 0); // vidi kako funkcionirra reduce
console.log(sumOfGrades);


// ja koristime students1 tuka
// filter bigger than 5 grade, da gi izvadime ocenkite i da ja napravime sumata na ocenkite
let result111 = students1
    .filter(student => student.grade > 1)
    .map(student => student.grade) // ja vrakjam ssamo ocenkata, ke vrati niza od brojki
    .reduce((sum, grade) => sum += grade, 0)
// console.log(result111);

// SORT
function sortFunction (arr){
    for (let i=0; i< arr.length ;i++){
        for (let j=i+1; j< arr.length; j++){
            if(arr[i].grade < arr[j].grade){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
        return arr;
}

let sorted = sortFunction(students1);
// console.log(sorted);

// ajde vo pokratka verzija

let descStudents = students1.sort((students1, students2) => students2.grade - students1.grade) // opagjacki redosled // descending
console.log(descStudents);
let ascStudents = students1.sort((students1, students2) => students1.grade - students2.grade) // ascending
console.log(ascStudents);

let sortByName = students1.sort((students1, students2) => // sortiranje po ime :D
 student1.name.localeCompare(students2.firstName)) // mora da imame string za da ja povikame localeCompare
 console.log(sortByName)

