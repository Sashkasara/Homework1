// 12345 -> 6 5 4 3 2

//0.2 + 0.1
// console.log(0.2 + 0.1)




let number = 123456;

// let counter = 0;
// while(counter < 1000) {      MOZE I VAKA AMA POKOMPLICIRANO E

//     conunter++ 
// }

while (number !== 0){ // ako ne e tocen uslovot nema da se izvrsi , a so do while ednas min mora da se isvrsi
    let lastNumber = number % 10; // zemi ja poslednata brojka
    console.log(lastNumber);
    number = Math.floor(number / 10);
}


do {
    let lastNumber = number % 10; // izvrsi ednas pa posle proveri go uslovot
    console.log(lastNumber);
    number = Math.floor(number / 10); // mnogu malku se koristi do while 
} while (number !==0);


for ( let i = 100; i > 0; i-=2) { // ke gi ispecati site brojki od 100, preskoknuvajki edna brojka 
    console.log(i)
//   for (let j = 0; j < 10; j++) {} // for ciklus e vrzan za brojac
}



let arr = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"]
for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
}

for (let element of arr) {  // ova kako zamena polesna za ova gore
    console.log(element) // gi vrti vrednostite vo nizata a for IN indexite
}
console.log(arr)

for (let element in arr) { // gi ZIMA INDEXITE 
    console.log(element)
}      // da gi zememe klucevite??? ne znam 