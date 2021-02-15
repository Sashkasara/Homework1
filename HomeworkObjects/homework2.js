

let titleInput = prompt("Enter a book title:");
let authorInput = prompt("Enter the author:");
let statusInput = prompt("Did you read that book? Enter true or false");

function BookObject(titleInput, authorInput, statusInput){
    this.title = titleInput;
    this.author = authorInput;
    this.readingStatus = statusInput;
    this.status = function (){
        if (this.readingStatus == 'true'){
            console.log(`Already read '${this.title}' by ${this.author}.`);
        } else if(this.readingStatus == 'false'){
            console.log(`You still need to read '${this.title}' by ${this.author}.`);
        }
    }
} 


let result = new BookObject(titleInput, authorInput, statusInput);
result.status();