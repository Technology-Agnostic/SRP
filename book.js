class Book {
    constructor(author, title, issueDate, description, price) {
        this.author = author;
        this.title = title;
        this.issueDate = issueDate;
        this.description = description;
        this.price = price;
    }

    get id() {
        return `${this.author} - ${this.title} - ${this.price}`;
    }
}

module.exports = Book;
