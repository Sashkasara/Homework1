class Animal {
    constructor(name, type, age, size){
        this.name = name;
        this.type = type;
        this.age = age;
        this.size = size;
    }
    eat (input) {
        if (input instanceof Animal) {
            if(this.type === "herbivore"){
                console.log(`The ${this.name} is a herbivore and does not eat other animals`)
            }
            if(this.type !== "herbivore") {
                if (this.size > input.size){
                    input.isEaten = true;
                    console.log(`The animal ${this.name} ate the ${input.name}`)
                } else {
                    console.log(`The animal ${this.name} tried to eat ${input.name} but it was too large`)
                }
            }
        }
        if (!(input instanceof Animal)) {
            console.log(`${this.name} is eating ${input}`)
        }
    }
    isEaten = false;
}

let cattle = new Animal ("Cattle", "herbivore", 3, 3);
let wolf = new Animal("Wolf", "carnivore", 4, 2);
let bear = new Animal("Bear", "omnivore", 30, 2);
let zebra = new Animal("Zebra", "herbivore", 2, 5);

wolf.eat(cattle);
wolf.eat(bear);
wolf.eat(zebra);
