// Prv nacin na kreiranje na objec // object literal
// let addressInfo = {
//     street: "Dogge Street",
//     streetNumber: 24,
//     contactNumber: "070111222"
// }

// console.log(addressInfo.street)


// Vtor nacin na kreiranje na objecti
let addressInfo = new Object (); // object constructor
addressInfo.street = "Dogge Street";
addressInfo.streetNumber = 24;
addressInfo.contactNumber = "070111222"

console.log(addressInfo.street)
console.log(addressInfo.streetNumber);
console.log(addressInfo.contactNumber);


// Tret nacin

function AddressInfo (street, streetNumber, contactNumber) { // moze da se reiskotistuva
    this.street = street;
    this.streetNumber = streetNumber;
    this.contactNumber = contactNumber;
}
let infoForAddress =  new AddressInfo ("Dogge Street", 24, "070111222")
console.log(infoForAddress);



let dog = {
    name:"Sparky",
    color:"brown",
    age: 1,
    agressive: true,
    favoriteFood: ["Carrot","Watermellon", "Bacon"],
    bark: function(){
        console.log("BARK BARK BARK");
    },
    sparkyFavoriteFood: function(){
        for(let i of this.favoriteFood){
            console.log(i)
        }
    }
}
console.log(dog.name);
console.log(dog.bark());
console.log(dog.sparkyFavoriteFood());

// So konstruktor notation

function Dog (name, color,age, favoriteFood, agressive){
    this.name = name;
    this.color = color;
    this.age =age;
    this.favoriteFood = favoriteFood;
    this.agressive = agressive;

    this.bark = function(){
        console.log("BARK, BARK, BARK")
    }
    this.sparkyFavoriteFood = function(){
        for (let i of favoriteFood) {
            console.log(i);
        }
    }
}
let sparky = new Dog ("Sparky", "brown", 1, ["milk", "banana", "beef", "bone"], true);
console.log(sparky.agressive);
console.log(sparky.favoriteFood);
console.log(sparky.bark());



let obj = {
    // props
}

let obj1 = {
    // props
}
                  // vaka e potesko posto se posebni 
let obj2 = {
    // props
}

let objConstructor =  new Object();
objConstructor // prop

function Person (fName, Lname, yob){
    this.fName = fName;
    this.Lname = Lname;
    this.yearOfBirth = yob;

    this.getFullName = function(){
        return `${this.firstName[0]} ${this.Lname}` // prvata bukva od Trajann primer ako nu treba
    }
    this.getAge() = function(){
        let currentYear = new Date().getFullYear(); // ke ni ja vrata segasnata godina
        return currentYear - this.yearOfBirth; // godini na nasiot person
    }
}

let person = new Person ("Trajan", "Stevkovski", 33);
// let person1 = newPerson
console.log(`Full name of the person is ${person.getFullName()} and the age is ${getAge()}`) // celo ime ni treba

// mnogu polesno vaka so function


// THIS KEYWORD

let width = 300; // global scope
let shape = {
    width = 600
}

function getWidth() {
    console.log(this)
}
shape.getWidth = getWidth;

shape.getWidth();
getWidth();



// do while loops

let counter = 0;
do {
    console.log(counter)  // sekogas ke izvrsuva
} while (counter !== 0);


let counter1 = 0;
while( counter1 <= 10000){
    console.log(counter1)
    if(counter1 === 99){
        break;
    }

    counter1++;

}

for (let i = 0; i < 10000; i++) {
    console.log(counter1)
    if(counter1 === 99){
        break;
    }
}