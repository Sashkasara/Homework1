var myJSON = `{
    "trainer": "John Smith",
    "assistant":"John Paul",
    "students": [
        "Bob",
        "Chris",
        "Jill",
        "Greg"
    ],
    "academy": "SEDC"
}`;
console.log(myJSON);

let myObject = JSON.parse(myJSON);
  // konvertira json string vo json object
  console.log(myObject);

  // Plain JS request
  document.getElementById("sendRequest").addEventListener("click", function(){
      let xmlRequest = new XMLHttpRequest(); // creating instance from XMLHRequest

      xmlRequest.onload = function(){ //otkako se onload sto da se slucuva so podatocite
          console.log("Request is sent"); // adding logic whcich will be executed
          if(xmlRequest.status >= 200 && xmlRequest.status <=300){
              console.log("Request is successful");
              let jsonResponse = JSON.parse(xmlRequest.response);
              console.log(jsonResponse);
          }
          else { // if request is not successful this will be executed
              console.log("Bad request")
            }
      }
      xmlRequest.open("GET", "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json");
      xmlRequest.send(); // sending XMLHttpRequest to server/api
  });


  //JQUERY Request

  $(document).ready(function(){
      $("#jQueryAjaxRequest").click(function(){
          //simple JQuery request with response printed in the console..
          $.ajax({
            type: "GET", // defining what type of request is(it could be GET, POST, etc..)
            url: "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json",
            //data: we are using data if we want to send some info to API(first we need to serialize the object)
            success: function(response){
                // what will happen if we have successfull request
                console.log("Request is successfull");
                let responseObjest = JSON.parse(response); // converting json string to JSON Object
                //if the response is not JSON Object
                console.log(response)
            },
            error:function(response){
                // what will happen if we have bad request
                console.log("Bad Request");
            }
          })
      });


      //FUNCTION FOR SHOWING ELEMENTS ON HTML WITH JQUERY
      //function with 1 argument (only response)
      function printElements(response){
          let element = $("#astros");
          element.html("");

          for (let i=0; i<response.people.length; i++){
              element.append(`<li>${response.people[i].name}</li>`)
          }
      }
      //function with 2 argumentsn(html element and response from api)
      function printElementsWithTwoArguments(element, response){
          let elementDOM =$(element);
          elementDOM.html("");

          for(let i=0; i<response.people.length; i++){
              elementDOM.append(`<li>${response.people[i].name}</li>`)
          }
      }

    $("#astrosRequest").on("click", function(){
        //JQuery Request with response shown on HTML
        $.ajax ({
            type: "GET",
            url:"http://api.open-notify.org/astros.json",
            success: function(response){
                console.log(response);
                // THIS IS WITH VANILLA JS
                // PARSING ELEMENTS TO HTML WITH VANILLA JS(pure js)
                // let element = document.getElementById("astros");
                // element.innerHTML = "";

                // for(let i=0; i<response.people.length; i++){
                //     element.innerHTML += `<li>${response.people[i].name}</li>`;
                // }


                // SO JQUERY
                //pARSING ELEMENT TO HTML WITH JQUERY
                let elementWithJquery = $("#astros");
                elementWithJquery.html("");
                for(let i = 0; i< response.people.length; i++){
                    elementWithJquery.append(`<li>${response.people[i].name} </li>`);
                }
                //calling function for printing with one argument
                printElements(response);
                //calling function for printing elements with 2 arguments(element name and response from api\server)
                printElementsWithTwoArguments("#astros",response);
            },
            error:function(response){
                console.log("The request has failed, Bad Request")
            }
        })
    })


  });


