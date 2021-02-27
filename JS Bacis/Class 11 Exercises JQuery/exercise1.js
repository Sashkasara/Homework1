// 1.Create input form which will contain info about book
// (Name,Author,Telephone,Date). After clicking on the add button the book will be inserted into unordered list.


$(document).ready(function(){
 

$("button").click(function(){


 let name = $("#name").val();
 let author = $("#author").val();
 let number = $("#telephone").val();
 let date = $("#date").val();

$("ul").append(
    `
    <li>Name : ${name} </li> <br>
    <li>Author: ${author} </li> <br>
    <li>Telephone: ${number}</li> <br>
    <li>Datum: ${date} </li> <br>
    `
)

})
}, false)
 

// let book = new NewBook (name, author, number, date);
//  array.push(book)
//  console.log(array);
 
//     let ul = document.createElement("ul");
//     document.body.appendChild(ul); // dodava novi vrednosti
//     let newList = document.createElement("li");
//     function printTheList (){
//         for (let i = 0; i < array.length; i++) {
//             ul.appendChild(newList);
//             newList.innerHTML = (`${array[i].name} ${array[i].author} ${array[i].number} ${array[i].date} `)
//         }
//     }
//     printTheList();

