let arrayFirstNames = ["Sashka", "Jovana", "Darko", "Dame", "Hristina"];
let arrayLastNames = ["Sarafinovska", "Todorovska", "Todorovski", "Zafirovski", "Danilovska"];

function fullNames () {
    arrayFirstNames[0] = 1 + "." + arrayFirstNames[0];
    arrayFirstNames[1] = 2 + "." + arrayFirstNames[1];
    arrayFirstNames[2] = 3 + "." + arrayFirstNames[2];
    arrayFirstNames[3] = 4 + "." + arrayFirstNames[3];
    arrayFirstNames[4] = 5 + "." + arrayFirstNames[4];
    let names = (arrayFirstNames[0] + " " + arrayLastNames[0]) + "\n" +(arrayFirstNames[1] + " " + arrayLastNames[1]) + "\n"+
    (arrayFirstNames[2] + " " + arrayLastNames[2]) + "\n" + (arrayFirstNames[3] + " " + arrayLastNames[3]) + "\n" + 
    (arrayFirstNames[4] + " " + arrayLastNames[4]);
    console.log (names);
    return names;
}
fullNames();