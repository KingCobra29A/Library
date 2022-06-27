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
    }

    removeBook(){
        //add implementation
    }

    queryBook(newBook){
        return this.books.some((book) => book.title === newBook.title);
    }
}


const myLibrary = new Library();

/****************** end datatypes ********************/

