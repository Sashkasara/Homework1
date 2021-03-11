function Academy (name, students, subjects, startDate, endDate) {
    this.name = name;
    this.students = students;
    this.subjects = subjects;
    this.start = new Date(startDate);
    this.end = new Date(endDate);
    this.numberOfClasses = this.subjects.length * 10;

    this.printStudents = function() {
        this.students.forEach(student => console.log(student));
    };

    this.printSubjects = function() {
        for (let i = 0; i < this.subjects.length; i++) {
            console.log(`${i + 1}.${subjects[i]}`);
        }  
    };
}

let studentAcademy = new Academy("Codecademy", ["Sashka Sarafinovska", "Nikola Trajkovski", "Daria Andreevska"], ["Biology", "Science", "Arts", "English"], "2020", "2021");
//console.log(studentAcademy);

function Subject (title, isElective, academyObj, students) {
    this.title = title;
    this.numberOfClasses = 10;
    this.isElective = isElective;
    this.academy = academyObj;
    this.students = students;

    this.overrideClasses = function(number) {
    
        if(number < 3){
            console.log("Number of classes can't be less than 3!");
        } else {
            this.numberOfClasses = number;
        }
    }
}

let studentSubject = new Subject("English", false, studentAcademy, []);
//console.log(studentSubject);

function Student(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedSubjects = [];
    this.academy = null;
    this.currentSubject = null;

    this.startAcademy = function (academyObj) {
        this.academy = academyObj;
        academyObj.students.push(`${this.firstName} ${this.lastName}`);
    };
  
    this.startSubject = function(academySubj) {                
       if (this.academy) {
           let subject = this.academy.subjects.filter(sub => sub === academySubj.title).length > 0;
            if (subject) {
                academySubj.students.push(this.firstName);
                if (!this.currentSubject) {
                    this.currentSubject = academySubj;
                    return;
                }

                this.completedSubjects.push(this.currentSubject);
                this.currentSubject = academySubj;
            }
        } else {
            throw new Error("Subject does not exsist!");
        }
  
    }

}

let firstStudent = new Student("Sashka", "Sarafinovska", 26);
firstStudent.startAcademy(studentAcademy);
//console.log(studentAcademy.students);

firstStudent.startSubject(studentSubject);
    
let subject2 = new Subject("Geography", true, studentAcademy, []);
firstStudent.startSubject(subject2);  

let subject3 = new Subject("Biology", true, studentAcademy, []);
firstStudent.startSubject(subject3);  

let subject4 = new Subject("Arts", true, studentAcademy, []);
firstStudent.startSubject(subject4); 
console.log(firstStudent);