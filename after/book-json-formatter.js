class BookJSONFormatter {
    constructor(logger) {
        this.logger = logger;
    }

    format(books) {
        const jsonBooks = {};
        for (let book of books) {
            Object.assign(jsonBooks, {
                [book.id]: book
            });
        }
        this.logger.info('getBooksJSON', 'requested books json', jsonBooks);
        return JSON.stringify(jsonBooks);
    }
}

module.exports = BookJSONFormatter;