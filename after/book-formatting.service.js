class BookFormattingService {
    constructor(bookRepository) {
        this.bookRepository = bookRepository;
    }

    async getFormattedBooks(formatter) {
        const books = await this.bookRepository.getBooks();
        return formatter.format(books);
    }
}

module.exports = BookFormattingService;
