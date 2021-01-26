let inputs = document.getElementById("userInputs").children;
let result = document.getElementById("result");
let buttonSbm = document.getElementById("button");

function getUserInfo(inputElements){
    let result = "User: ";
    for (let input of inputElements) {
        result += input.value + " ";
    }
    result += "is registered!"
    return result;
}
buttonSbm.addEventListener("click", function(){
    result.innerText = getUserInfo(inputs);
})


// tuka probuvav na drugi razlicni nacini ama ne mi funcionira..
