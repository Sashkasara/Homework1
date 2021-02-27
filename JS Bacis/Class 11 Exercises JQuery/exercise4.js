// 4.Create Navigation Menu with 3 options. Initially on loading the page the first will be showed.
//  After clicking on another option the currentlly active content will be hiden and the selected one will be shown.

$(document).ready(function(){
        $("#firstText").show();
        $("#secondText").hide();
        $("#thirdText").hide();
    
       $("#firstOption").click(function(){
        $("#firstText").show();
        $("#secondText").hide();
        $("#thirdText").hide();

     })
      $("#secondOption").click(function(){
        $("#firstText").hide();
        $("#secondText").show();
        $("#thirdText").hide();
     
    })
    $("#thirdOption").click(function(){
        $("#firstText").hide();
        $("#secondText").hide();
        $("#thirdText").show();
})
})






    // window.load(function(){
    //     ("#firstText").show()
    //     ("#secondText").hide();
    //     ("#thirdText").hide();
    // })
    // $("#secondOption").click(function(){
    //     ("#firstText").show()
    //     ("#secondText").hide();
    //     ("#thirdText").hide();
    // })
