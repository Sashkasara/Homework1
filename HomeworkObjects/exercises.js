//EXERCISE 1

let description = {
    firstName: "Sashka",
    lastName: "Sarafinovska",
    age: 26,
    company: "SEDC",
    pets: true,
    selfDescription: function() {
        return this.pets
    }
  }
// EXERCISE 2
  description.firstName = "Filip";
  description.lastName = "Janev";
  description.age = 25;
  description.company = "So-Pro";
  description.pets = false;
  console.log(selfDescription);

//EXERCISE 3 
// Write a JavaScript program to delete the lecture property from the following object. Add a property age to the object.
// Add a method getFullName that returns the full name
// ( First Name and Last name )

let trainer = { 
	name :  "Stefan",
	lastName: "Stefanovski",
	academy: "SEDC",
	lecture: "Objects"
}

delete(trainer.lecture);
trainer.age = 25;
trainer.getFullName = function(){
  return this.name + this.lastName;
}

//EXERCISE 4
// Create a car object with some properties
// model, color, year, fuel, fuelConsumption and a method that calculate how much fuel
// you will need to pass some distance.

let car = {
    model: "Porsche",
    color: "Black",
    year: 2015,
    fuel: 60,
    fuelConsumption: 7,
    calculateFuelForDistance: function(distance){
      return distance * (this.fuelConsumption/100);
    }
  };