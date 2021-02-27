$(document).ready(function(){
    let name = $("#inputName");
    let color = $("#inputColor");
    
  
    $("#button").click(function(){
        if (name.val() !== "" && color.val() !== "") {
            $("#inputColor").first().after(`<h1>Your name is ${name.val()} and your color is ${color.val()} </h1>`);
        }
        else {
             console.log($("#messages").text("Error") )
         }
    });
 
});
