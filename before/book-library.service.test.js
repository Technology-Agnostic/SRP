const assert = require('node:assert');
const BookLibraryService = require('./book-library.service');

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

    fetch = () => Promise.resolve(BOOKS);
    const bookLibraryService = new BookLibraryService();

    it('getBooksCSV should return list of books in CSV format', async () => {
        const EXPECTED_BOOKS_CSV = `data:text/csv;charset=utf-8,Alex Korb,The Upward Spiral,March 2015,A masterful account of the neuroscience behind depression, as well as of concrete steps that will lead to an "upward spiral" out of depression,13.99
Eric Evans,Domain-Driven Design,August 2003,This is not a book about specific technologies. It offers readers a systematic approach to domain-driven design, presenting an extensive set of design best practices, experience-based techniques...,20.99
Fyodor Dostoevsky,Crime and Punishment,1866,Crime and Punishment follows the mental anguish and moral dilemmas of Rodion Raskolnikov, an impoverished...,23.5
`;
        const booksCSV = await bookLibraryService.getBooksCSV();
        assert.equal(booksCSV, EXPECTED_BOOKS_CSV)
    });

    it('getBooksJSON should return list of books in JSON format', async () => {
        const EXPECTED_BOOKS_JSON = '{"Alex Korb - The Upward Spiral - 13.99":{"author":"Alex Korb","title":"The Upward Spiral","issueDate":"March 2015","description":"A masterful account of the neuroscience behind depression, as well as of concrete steps that will lead to an \\"upward spiral\\" out of depression","price":13.99},"Eric Evans - Domain-Driven Design - 20.99":{"author":"Eric Evans","title":"Domain-Driven Design","issueDate":"August 2003","description":"This is not a book about specific technologies. It offers readers a systematic approach to domain-driven design, presenting an extensive set of design best practices, experience-based techniques...","price":20.99},"Fyodor Dostoevsky - Crime and Punishment - 23.5":{"author":"Fyodor Dostoevsky","title":"Crime and Punishment","issueDate":"1866","description":"Crime and Punishment follows the mental anguish and moral dilemmas of Rodion Raskolnikov, an impoverished...","price":23.5}}';
        const booksJSON = await bookLibraryService.getBooksJSON()
        assert.equal(booksJSON, EXPECTED_BOOKS_JSON);
    });
});
