const Book = require('../book');

class BookLibraryService {
    constructor() {
        this.cache = null;
        this.isInvalidCache = false;
        this.booksStorageUrl = 'example://api.books-storage.com/books';
    }

    async getBooksJSON() {
        const books = await this.getBooks();
        const jsonBooks = {};
        for (let book of books) {
            Object.assign(jsonBooks, {
                [book.id]: book
            });
        }
        const date = new Date().toISOString();
        console.log('[info]', `${date}`, 'getBooksJSON', 'requested books json', jsonBooks);
        return JSON.stringify(jsonBooks);
    }

    async getBooksCSV() {
        let csvBooks = 'data:text/csv;charset=utf-8,';
        const books = await this.getBooks();
        for (let book of books) {
            const { author, title, issueDate, description, price } = book;
            const bookLine = `${author},${title},${issueDate},${description},${price}\n`;
            csvBooks += bookLine;
        }
        const date = new Date().toISOString();
        console.log('[info]', `${date}`, 'getBooksCSV', 'requested books csv', csvBooks);
        return csvBooks;
    }

    async getBooks() {
        if (this.cache !== null && !this.isInvalidCache) return this.cache;

        const booksData = await fetch(this.booksStorageUrl)
            .then((booksData) => {
                const date = new Date().toISOString();
                console.log('[info]', `${date}`, 'getBooks', 'requested books', booksData);
                return booksData;
            });
        const books = booksData.map(bookData => {
            const { author, title, issueDate, description, price } = bookData;
            return new Book(author, title, issueDate, description, price);
        });
        this.cache = books;
        return books;
    }
}

module.exports = BookLibraryService;
