$(document).ready(function(){
    let input = $("#input");
    

    $("#button").click(function(){
       let result = $("#button").first().after(`<h1>Hello ${input.val()}</h1> `)
        console.log(result)
    })
})
