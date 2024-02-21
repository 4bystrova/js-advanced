import Book from "./Book.js";
export default class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this._fileFormat = fileFormat
    }
    get fileFormat(){
        return this._fileFormat
    }

    set fileFormat(format){
        if(typeof format !== "string"){
            console.error("Error: Title should be type of string")
            return
        }

        if(format.length < 1){
            console.error("Error: Title length should be at least 1 symbol")
            return
        }

        if(format.length > 100){
            console.error("Error: Title length should be less or equal to 100 symbols")
            return
        }

        this.fileFormat = format
    }

    static fromBookAndFileFormat(book, fileFormat){
        return new EBook(book.title, book.author, book.year, fileFormat)
    }

    printInfo(){
        console.log(`This book has title ${this._title}, was published by ${this._author} in ${this._year} in format ${this._fileFormat}.`);
    }
}