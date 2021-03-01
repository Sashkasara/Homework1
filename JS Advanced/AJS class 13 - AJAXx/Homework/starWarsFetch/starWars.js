// ## Exercise 2
// Create a button
// When the button is clicked, call the StarWars api for the first person. \
// Print the person name in an **h1** tag. \
// Print the person stats in a **table**:
// * Height
// * Weight
// * Eye color
// * Hair color

// **URL:** https://swapi.dev/api/people/1 \
// **NOTE:** JQuery will automatically parse this call (js will not).

let result = document.getElementById('result')
let list = document.getElementById('list');
let button = document.getElementById('button');

button.addEventListener('click', function(){
    let starWarsUrl = "https://swapi.dev/api/people/1/";

    fetch(starWarsUrl)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            result.innerHTML += `The name of the person is: ${data.name}`
            list.innerHTML += `<li>${data.height}cm</li>
                                <li>${data.mass}kg</li>
                                <li>${data.eye_color}</li>
                                <li>${data.hair_color}</li>`
        })
        .catch(function(error){
            console.log(error);
        })
})