let animal = {
    name: "Jackie",
    kind: "turtle",
    speak: function(){
        console.log (`This is ${this.name}, a small ${this.kind}. He says hey bro! `)
    }
}
animal.speak()