/****************** datatypes ********************/

class Book{
    constructor(title, author, numPages, isRead){
        this.title = title;
        this.author = author;
        this.numPages = numPages;
        this.isRead = isRead;
        this.index = 0;
    }

    updateReadStatus(readStatus){
        if(readStatus == true){
            this.isRead = true;
        }
        else{
            this.isRead = false;
        }
    }

}

class Library{
    constructor(){
        this.books = [];
        this.booksRead = 0;
    }

    addBook(newBook){
        if(!this.queryBook(newBook)){
            this.books.push(newBook);
        }
        this.displayLibrary();
    }

    removeBook(index){
        this.books.splice(index, 1);
        this.displayLibrary();
    }

    queryBook(newBook){
        return this.books.some((book) => book.title === newBook.title);
    }

    displayLibrary(){
        
        //loop to delete all dom cards
        while(libarry.firstChild){
            libarry.removeChild(libarry.firstChild);
        }

        //loop to create dom cards for each book in the library
        for(let i=0; i < this.books.length; i++){

            //creating dom elements for the card, remove button, title, author, numpages
            let card = document.createElement("div");
            let btn = document.createElement("button");
            let cardTitle = document.createElement("H1");
            let cardTitleContent = document.createTextNode(this.books[i].title);
            let cardAuthor = document.createElement("H2");
            let cardAuthorContent = document.createTextNode("By: " + this.books[i].author);
            let cardNumPages = document.createElement("H2");
            let cardNumPagesContent = document.createTextNode("Number of Pages: " +  this.books[i].numPages.toString());

            //creating dom elements for "is read" slider
            let isReadWrapper = document.createElement("div");
            let isReadLabel = document.createElement("label");
            let cardIsRead = document.createElement("input");
            let cardIsReadSlider = document.createElement("span");
            let cardIsReadText = document.createElement("H2");
            let cardIsReadTextContent = document.createTextNode("Mark as Read:");


            //set card & book index for mapping between book and dom element
            card.dataset.index = i;
            this.index = i;


            //setting up slider
            isReadLabel.classList.add("isReadSwitch");
            cardIsRead.type = "checkbox";
            if(this.books[i].isRead == true){
                cardIsRead.checked = true;
            }
            cardIsReadSlider.classList.add("slider");
            isReadLabel.appendChild(cardIsRead);
            isReadLabel.appendChild(cardIsReadSlider);
            cardIsReadText.appendChild(cardIsReadTextContent);
            isReadWrapper.appendChild(cardIsReadText);
            isReadWrapper.appendChild(isReadLabel);

            //setting up card
            btn.innerHTML = "x";
            cardTitle.appendChild(cardTitleContent);
            cardAuthor.appendChild(cardAuthorContent);
            cardNumPages.appendChild(cardNumPagesContent);
            card.appendChild(btn);
            card.appendChild(cardTitle);
            card.appendChild(cardAuthor);
            card.appendChild(cardNumPages);
            card.appendChild(isReadWrapper);
            btn.classList.add("remove-btn");
            card.classList.add("card");
            isReadWrapper.classList.add("slideWrapper");
            libarry.appendChild(card);
            
            //add event listener to remove book when "x" is clicked on by user
            btn.addEventListener('click', e=>{
                this.removeBook(e.target.parentNode.dataset.index);
            });

            //add event listener to update library log based on status of isread slider
            isReadLabel.addEventListener('change', e=>{
                if(e.target.checked == true){
                    this.books[e.target.parentNode.parentNode.parentNode.dataset.index].updateReadStatus(true);
                }
                else{
                    this.books[e.target.parentNode.parentNode.parentNode.dataset.index].updateReadStatus(false);
                }
                this.updateLibraryLog();
            });
        }

        this.updateLibraryLog();         
    }

    updateLibraryLog(){
        let readCount = 0;
        for(let i = 0; i < this.books.length; i++){
            if(this.books[i].isRead == true){
                readCount++;
            }
        }
        //update total book count
        bookCountSelector.textContent = this.books.length;

        //update books read count
        bookCountReadSelector.textContent = readCount;
    }


}


const myLibrary = new Library();
let author, title, numPages, isRead;

/****************** end datatypes ********************/


/****************** DOM selectors ***************************/

const addBookBtn = document.querySelector(".btn");
const modalSelector = document.querySelector(".new-book-modal");
const formSelector = document.querySelector(".modal-content");
const titleSelector = document.querySelector("#book-title");
const authorSelector = document.querySelector("#author");
const numPagesSelector = document.querySelector("#num-pages");
const isReadSelector = document.querySelector("#is-read");
let libarry = document.querySelector(".library-content");
let bookCountSelector = document.querySelector("#book-count");
let bookCountReadSelector = document.querySelector("#book-count-read");

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
    isRead = isReadSelector.checked;

    //reset form and close modal
    formSelector.reset();
    modalSelector.style.display = "none";

    myLibrary.addBook(new Book(title, author, numPages, isRead));
}
