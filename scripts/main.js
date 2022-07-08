/****************** datatypes ********************/

class Book{
    constructor(title, author, numPages, isRead){
        this.title = title;
        this.author = author;
        this.numPages = numPages;
        this.isRead = isRead;
    }

}

class Library{
    constructor(){
        this.books = [];
    }

    addBook(newBook){
        if(!this.queryBook(newBook)){
            this.books.push(newBook);
        }
        this.displayLibrary();
    }

    removeBook(){
        //add implementation
    }

    queryBook(newBook){
        return this.books.some((book) => book.title === newBook.title);
    }

    displayLibrary(){
        let i;
        
        while(libarry.firstChild){
            libarry.removeChild(libarry.firstChild);
        }


        for(i=0; i < this.books.length; i++){
            
            let card = document.createElement("div");
            let cardTitle = document.createElement("H1");
            let cardTitleContent = document.createTextNode(this.books[i].title);
            let cardAuthor = document.createElement("H2");
            let cardAuthorContent = document.createTextNode("By: " + this.books[i].author);
            let cardNumPages = document.createElement("H2");
            let cardNumPagesContent = document.createTextNode("Number of Pages: " +  this.books[i].numPages.toString());

            cardTitle.appendChild(cardTitleContent);
            cardAuthor.appendChild(cardAuthorContent);
            cardNumPages.appendChild(cardNumPagesContent);
            card.appendChild(cardTitle);
            card.appendChild(cardAuthor);
            card.appendChild(cardNumPages);
            card.classList.add("card");
            libarry.appendChild(card);           
        }
        
    }
}


const myLibrary = new Library();
let author, title, numPages;

/****************** end datatypes ********************/


/****************** DOM selectors ***************************/

const addBookBtn = document.querySelector(".btn");
const modalSelector = document.querySelector(".new-book-modal");
const formSelector = document.querySelector(".modal-content");
const titleSelector = document.querySelector("#book-title");
const authorSelector = document.querySelector("#author");
const numPagesSelector = document.querySelector("#num-pages");
let libarry = document.querySelector(".library-content");

/****************** end DOM selectors ***************************/


/***************************************** *************/

//display modal if user clicks new book button
addBookBtn.onclick = function(){
    modalSelector.style.display = "block";
}


//hide modal if user clicks outside of modal
window.onclick = function(event) {
    if (event.target == modalSelector) {
        modalSelector.style.display = "none";
    }
}

function submitModal(){
    author = authorSelector.value;
    title = titleSelector.value;
    numPages = numPagesSelector.value;

    //reset form and close modal
    formSelector.reset();
    modalSelector.style.display = "none";

    myLibrary.addBook(new Book(title, author, numPages, "no"));
    console.log(myLibrary);
}

function createCard(inputBook){
    const newSquare = document.createElement('template');
    newSquare.classList.add("card");
    return newSquare;
}