const assert = require('node:assert');
const BookLibraryService = require('./before/book-library.service');
// const BookLibraryService = require('./after/book-library.service');

// const Logger = require('./after/logger');
// const Cache = require('./after/cache');

// const BookFactory = require('./after/book-factory');
// const BookRepository = require('./after/book-repository');

// const BookCSVFormatter = require('./after/book-csv-formatter');
// const BookJSONFormatter = require('./after/book-json-formatter');

describe('BookLibraryService', () => {
    const BOOKS = [
        {
            author: 'Alex Korb',
            title: 'The Upward Spiral',
            issueDate: 'March 2015',
            description: 'A masterful account of the neuroscience behind depression, as well as of concrete steps that will lead to an "upward spiral" out of depression',
            price: 13.99
        },
        {
            author: 'Eric Evans',
            title: 'Domain-Driven Design',
            issueDate: 'August 2003',
            description: 'This is not a book about specific technologies. It offers readers a systematic approach to domain-driven design, presenting an extensive set of design best practices, experience-based techniques...',
            price: 20.99
        },
        {
            author: 'Fyodor Dostoevsky',
            title: 'Crime and Punishment',
            issueDate: '1866',
            description: 'Crime and Punishment follows the mental anguish and moral dilemmas of Rodion Raskolnikov, an impoverished...',
            price: 23.50
        },
    ];
    global['fetch'] = () => Promise.resolve(BOOKS);

    const bookLibraryService = new BookLibraryService();
    // const logger = new Logger();
    // const cache = new Cache();
    // const bookFactory = new BookFactory();
    // const bookRepository = new BookRepository(logger, cache, bookFactory);

    // const bookLibraryService = new BookLibraryService(bookRepository);

    it('getBooksCSV should return list of books in CSV format', () => {
        // const bookCSVFormatter = new BookCSVFormatter(logger);
        const EXPECTED_BOOKS_CSV = `data:text/csv;charset=utf-8,Alex Korb,The Upward Spiral,March 2015,A masterful account of the neuroscience behind depression, as well as of concrete steps that will lead to an "upward spiral" out of depression,13.99
Eric Evans,Domain-Driven Design,August 2003,This is not a book about specific technologies. It offers readers a systematic approach to domain-driven design, presenting an extensive set of design best practices, experience-based techniques...,20.99
Fyodor Dostoevsky,Crime and Punishment,1866,Crime and Punishment follows the mental anguish and moral dilemmas of Rodion Raskolnikov, an impoverished...,23.5
`;

        bookLibraryService.getBooksCSV()
        // bookLibraryService.getFormattedBooks(bookCSVFormatter)
            .then(booksCSV => assert.equal(booksCSV, EXPECTED_BOOKS_CSV));
    });

    it('getBooksJSON should return list of books in JSON format', () => {
        // const bookJSONFormatter = new BookJSONFormatter(logger);
        const EXPECTED_BOOKS_JSON = '{"Alex Korb - The Upward Spiral - 13.99":{"author":"Alex Korb","title":"The Upward Spiral","issueDate":"March 2015","description":"A masterful account of the neuroscience behind depression, as well as of concrete steps that will lead to an \\"upward spiral\\" out of depression","price":13.99},"Eric Evans - Domain-Driven Design - 20.99":{"author":"Eric Evans","title":"Domain-Driven Design","issueDate":"August 2003","description":"This is not a book about specific technologies. It offers readers a systematic approach to domain-driven design, presenting an extensive set of design best practices, experience-based techniques...","price":20.99},"Fyodor Dostoevsky - Crime and Punishment - 23.5":{"author":"Fyodor Dostoevsky","title":"Crime and Punishment","issueDate":"1866","description":"Crime and Punishment follows the mental anguish and moral dilemmas of Rodion Raskolnikov, an impoverished...","price":23.5}}';

        bookLibraryService.getBooksJSON()
        // bookLibraryService.getFormattedBooks(bookJSONFormatter)
            .then(booksJSON => assert.equal(booksJSON, EXPECTED_BOOKS_JSON));
    });
});
