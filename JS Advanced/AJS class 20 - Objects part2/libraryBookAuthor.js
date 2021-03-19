function Library (name, books, address){
    this.name = name;
    this.books = books;
    this.address = address;
    this.numberOfMembers = function (){
        return this.books.length * 15;
    }
    this.printBooks = function () {
        this.books.forEach(book => console.log(book));
    }
    this.addBook = function (title, genre, authors){
        this.books.push(Object.create(new Book(title, genre, authors)));
    }
}

function Book (title, genre, authors) {
    this.title = title;
    this.genre = genre;
    this.libraries = [];
    this.authors = authors;
    this.addLibrary = function (object, library) {
        this.libraries.push(library);
        object.books.push(this.title);
    }
    this.removeLibrary = function (object, library) {
        this.libraries = this.libraries.filter(item1 => item1 != library);
        object.books = object.books.filter(item => item != this.title);
    }
}

function Authors (firstName, lastName, yearOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.books = [];
    this.currentBook = null;
    this.startBook = function (bookObject) {

        if(this.currentBook !== null) {
            this.books.push(this.currentBook);
        }
        this.currentBook = Object.create(bookObject);
    }
}

let library1 = new Library('Ajoy Bose', ['Across the Universe', 'The Only Story', 'The Unseeing ldol of Light'], 'Branko Bogdanski br.77');

let firstBook = new Book('The Overstory', 'thriller', 'Richard Powers');
let secondBook = new Book('My Life, My Mission', 'thriller', 'Baba Ramdev');
firstBook.addLibrary(library1, "Ernest Hemingway");
firstBook.removeLibrary(library1, "Ernest Hemingway");

let author1 = new Authors("Lamar", "Odom", new Date(1993,03,18));
author1.startBook(firstBook);
let author2 = new Authors('James', 'Lawton', new Date(1981, 10, 20));
author1.startBook(firstBook);