class BookLibraryService {
    constructor(bookRepository) {
        this.bookRepository = bookRepository;
    }

    async getFormattedBooks(formatter) {
        const books = await this.bookRepository.getBooks();
        const formattedBooks = formatter.format(books);
        return formattedBooks;
    }

}

module.exports = BookLibraryService;
