class BookRepository {
    constructor(logger, cache, bookFactory) {
        this.logger = logger;
        this.cache = cache;
        this.bookFactory = bookFactory;

        this.booksStorageUrl = 'example://api.books-storage/books';
    }

    async getBooks() {
        if (this.cache.isValid()) return this.cache.getData();

        const booksData = await fetch(this.booksStorageUrl)
            .then((booksData) => {
                this.logger.info('getBooks', 'requested books', booksData);
                return booksData;
            });
        const books = booksData.map(this.bookFactory.createBook);
        this.cache.setData(books);
        return books;
    }
}

module.exports = BookRepository;