// ## Exercise 1
// Create a button
// When the button is clicked, get the data from a given url with an AJAX call. \
// Print the name of the academy in an **h1** tag. \
// Print all student names in an **unordered list**. \
// **URL:** https://raw.githubusercontent.com/Drakso/AJS2019/master/Class1/students.json \
// **NOTE:** You need to parse this data before using it.

let firstResult = document.getElementById('firstResult');
let secondResult = document.getElementById('secondResult');
let firstButton = document.getElementById('firstButton');

firstButton.addEventListener('click',function(){
    let xmlRequest = new XMLHttpRequest();

    xmlRequest.onload = function(){
        if(xmlRequest.status >= 200 && xmlRequest.status <= 300) {
            console.log('successful');
            let result = JSON.parse(xmlRequest.response);
            console.log(result);
            firstResult.innerHTML += `<h1>Academy:${result.academy}</h1>`;
            printStudents(result.students, secondResult);
        }
        else {
            console.log(xmlRequest.responseText);
        }
    }
    xmlRequest.open("GET", "https://raw.githubusercontent.com/Drakso/AJS2019/master/Class1/students.json");
    xmlRequest.send();
})

//print
function printStudents(array, element){
    for(let i = 0; i < array.length; i++) {
        element.innerHTML += `<li>${array[i]}</li>`
    }
}

$(document).ready(function() {

    $('#secondButton').click(function(){
    const url = "https://raw.githubusercontent.com/Drakso/AJS2019/master/Class1/students.json";

        $.ajax({
            url: url,
            success: function(result){
                console.log('Successfull');
            },
            error:function(){
                console.error('Error');
            }
        })
        .done(function(data){
            let result = JSON.parse(data);
            $('#firstResult').append(`<h1>Academy:${result.academy}</h1>`)
            printStudents(result.students, secondResult);
        })
    })
})
