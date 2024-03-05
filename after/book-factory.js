const Book = require('./book');

class BookFactory {
    createBook(bookData) {
        const { author, title, issueDate, description, price } = bookData;
        return new Book(author, title, issueDate, description, price);
    }
}

module.exports = BookFactory;