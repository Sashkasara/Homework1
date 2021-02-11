let container = document.getElementById("container");
let activeInputs = 1;
document.getElementById("newValue").addEventListener("click", function () {
    console.log(activeInputs)
    document.getElementById("container").innerHTML +=  `<input type="text" id="input1 id=input${activeInputs + 1}" />`
    activeInputs++
});

let inputValues=[];
document.getElementById("saveBtn").addEventListener("click", function(){
    let isValidInputs = true;
    let validationArr = [];
    
    for (let i = 1; i <= activeInputs; i++) {
        let value = document.getElementById(`input${i}`).value;
        let parsed = parseInt(value);

        if(!Number.isNaN(parsed)) {
            validationArr.push(value);
    } else {
        isValidInputs = false;
        break;
    }
    }

    if (isValidInputs){
    activeInputs = 1;
    document.getElementById("inputs").innerHTML =  `<input type="text" id="input1 id=input${activeInputs + 1}" />`
    inputValues = validationArr;
    
    } else {
        alert ("Please input valid values")
    }
    console.log(inputValues);
    
});

let dateString = "01/01/2020";

let date = new Date (dateString);
console.log(date)