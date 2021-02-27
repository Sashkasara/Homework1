function Person (fName, Lname, age) {  // kreirame memorija kaj da gi cuva ovie podatoci
    this.firstName= fName;
    this.lastName = Lname;
    this.age = age;

    this.info = function(){
        return `Name: ${this.firstName} ${this.lastName} Age: ${this.age}`;
    }
}

let persons = [];

let saveBtn = document.getElementById("saveBtn");
let result = document.getElementById("result");


let firstNameInput = document.getElementById("fName");
let lastNameInput = document.getElementById("lName");
let ageInput = document.getElementById("age");
let msg = document.getElementById("message");

saveBtn.addEventListener("click", function(event){
    let firstName = firstNameInput.value
    let lastName = lastNameInput.value;
    let age = ageInput.value;

    if (firstName === "" || lastName === "" || age === "") { // ili vaka moze (!firstName !lastName) ova e truthy falsy vredost
        showMessage("Please enter valid values", msg)
        return;
    } else {
        // persons.push(new Person (firstName, lastName, age)) // moze i vaka skrateno 
        let person = new Person (firstName, lastName, age);
    persons.push(person); // push vo arrayot
    printPersons(person, result)
    clearForm();
    showMessage("Successfully added person", msg)
    }

    
});

function printPersons(persons, element){
    element.innerHTML = ""; // ke se izbrishe vo html elements, primer da ni  e prazno toa pole
    
    let html = [];
    for (let i = 0; i < persons.length; i++) {
        html += `<li> ID${i + 1} ${persons[i].info()} </li>`
    }
    element.innerHTML = html;
}

function clearForm (){
    firstNameInput.value = "";  // za cistenje na inputi
    lastNameInput.value = "";
    ageInput.value= "";
}

function showMessage(message, element){ // nova funkcija za ispisuvanje na poraka
    element.innerHTML = "";
    element.innerHTML = `<p>${message}</p>`;
}