import Book from './Book.js';
import EBook from './EBook.js';

const firstBook = new Book('Ikigai', 'Francesc Miralles', '2019');
firstBook.printInfo();

const secondBook = new Book('Atomic Habits', 'Clear James', '2018');
secondBook.printInfo();

const thirdBook = new Book('Think and Grow Rich', 'Hill Napoleon', '2005');
thirdBook.printInfo();

const firstEBook = new EBook('The Harry Potter Wizarding Almanac', 'Rowling J. K.', '2020', 'epub');
firstEBook.printInfo();

const books = [firstBook, secondBook, thirdBook, firstEBook];

const oldestBook = Book.findOldestBook(books);
const ebook = EBook.fromBookAndFileFormat(firstBook, 'PDF');
