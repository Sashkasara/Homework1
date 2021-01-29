//EXERCISE 1
$(document).ready(function(){
    let divOne = $("#oneDiv");
    let paragraph = $(".paragraphs").first();
    let h3 = $("h3").first();
    let h1 = $("h1").last();
    let button = $("button");
    console.log(button);
});

//EXERCISE 2

$(document).ready(function(){
    let firstHeader = $("#divOne").first().text("JQuery is awesome");
    let newParagraph = $("h1").first().after("<p>This is the new paragraph</p>");
    let button = $("button").css("background-color", "red");

});

// EXERCISE 3 

$(document).ready(function(){
    $("button").first().click(function(){
        $("#divTwo").hide();
        $("p").css("color","green");
        $("button").first().text("Don't click me");
    })
})

