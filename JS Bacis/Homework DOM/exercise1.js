let secondParagraph = document.getElementsByClassName("paragraph second");
secondParagraph[0].innerText = "This is new text to paragraph2";
console.log(secondParagraph[0].innerText);

let firstHeader = document.getElementById("myTitle");
firstHeader.innerText = "This is new text to the first header";
console.log(firstHeader.innerText);

// let secondHeader = document.getElementsByTagName("h1");
// secondHeader[0].innerText = "This is new text to the second header";
// console.log(secondHeader[0].innerText);

let secondHeader = document.getElementsByTagName("div");
secondHeader[2].firstElementChild.innerText = "This is new text to the second header";
console.log(secondHeader[2].firstElementChild.innerText);

let thirdHeader = document.getElementsByTagName("div");
thirdHeader[2].lastElementChild.innerText = "This is new text to the third header";
console.log(thirdHeader[2].lastElementChild.innerText);

