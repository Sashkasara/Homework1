function Person (firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.getFullName = function() {
        console.log(`${this.firstName} ${this.lastName}`);
    }

}

function Student(firstName, lastName, age, academyName, studentId) {
    Object.setPrototypeOf(this, new Person(firstName, lastName, age));
    this.academyName = academyName;
    this.studentId = studentId;

    this.study = function() {
        console.log(`The student ${this.firstName} is studing in ${this.academyName}.`);
    }
}

let firstStudent = new Student("Sashka", "Sarafinovska", 26, "SEDC", 27);
let secondStudent = new Student("Daria", "Andreevska", 22, "SEDC", 22);

console.log(firstStudent);
