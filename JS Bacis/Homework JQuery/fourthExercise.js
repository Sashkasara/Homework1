$(document).ready(function(){
    let firstInput = $("#firstInput");
    let secondInput = $("#secondInput");
    let thirdInput = $("#thirdInput");
    let result = $("#result");
  
    function calculation (firstInput, secondInput, thirdInput){
      let calculate = (firstInput + secondInput + thirdInput);
      return calculate / 3;
    }
  
    $("#button").click(function(){
      let numberOne = parseInt(firstInput.val());
      let numberTwo = parseInt(secondInput.val());
      let numberThree = parseInt(thirdInput.val());
  
      let calculateAvg = calculation(numberOne, numberTwo, numberThree);
  
      if(calculateAvg >= 10) {
           result.text(calculateAvg).css("color", "green")
        }
        else if(calculateAvg < 10) {
          result.text(calculateAvg).css("color", "red")
        }
    })
    
  })
  