// 2.Create table which will have info about cars(Licence plates,Model,Color).
//  Every even row will have red color and every first and last td border will have background color.

$(document).ready(function(){
$("#firstRow").css("color","red");
$("#thirdRow").css("color", "red");
$("#fifthRow").css("color", "red");
$("#seventhRow").css("color", "red");

$("td:first-child").css("background-color", "gray")
$("td:last-child").css("background-color", "gray")
})