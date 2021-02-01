let studentArray = [];
document.getElementById("button").addEventListener("click", function(){
let userFirstName = document.getElementById("firstName").value;
let userLastName = document.getElementById("lastName").value;
let userAge = document.getElementById("age").value;
function Student (userFirstName, userLastName, userAge){
  this.Name = userFirstName,
  this.LastName = userLastName,
  this.age = userAge;
}
let student = new Student (userFirstName, userLastName, userAge)
studentArray.push(student);
console.log(studentArray);

let list= document.createElement("ul");
document.body.appendChild(list);
let newList = document.createElement("li");
function studentsFuntion(){
  for (let i=0; i < studentArray.length; i++) {
    list.appendChild(newList);
    newList.innerHTML = (`${studentArray[i].Name} ${studentArray[i].LastName} ${studentArray[i].age}`);
  }
}
studentsFuntion();
}, false)

