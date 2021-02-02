// 3.Create Menu option which will have 3 options(Starting,Increased,Reduce),
//  after clicking every one of them it will afect the font in the paragraph.

$(document).ready(function(){
    $("#starting").click(function(){
        $("p").css("font-family", "Arial")
    })
    $("#reduce").click(function(){
        $("p").css("font-size","10px" )
    })
    $("#increase").click(function(){
        $("p").css("font-size", "20px")
    })
})