export default class Book {
  constructor(title, author, year) {
    this._title = title;
    this._author = author;
    this._year = year;
  }
  get title() {
    return this._title;
  }

  get author() {
    return this._author;
  }

  get year() {
    return this._year;
  }

  set title(value) {
    if (typeof value !== 'string') {
      console.error('Error: Title should be type of string');
      return;
    }

    if (value.length < 1) {
      console.error('Error: Title length should be at least 1 symbol');
      return;
    }

    if (value.length > 100) {
      console.error('Error: Title length should be less or equal to 100 symbols');
      return;
    }

    this._title = value;
  }

  set author(name) {
    if (typeof name !== 'string') {
      console.error('Error: Author should be type of string');
      return;
    }

    if (name.length < 5) {
      console.error('Error: Author name should be at least 5 symbols');
      return;
    }

    if (name.length > 100) {
      console.error('Error: Author name should be less or equal to 100 symbols');
      return;
    }

    this._author = name;
  }

  set year(date) {
    if (typeof date !== 'number') {
      console.error('Error: Year should be type of number');
      return;
    }

    if (date <= 1800) {
      console.error('Error: Year should be older then 1800');
      return;
    }

    this._year = date;
  }

  static findOldestBook(books) {
    books.sort(function (a, b) {
      return a.year - b.year;
    });
    return books[0];
  }

  printInfo() {
    console.log(`This book has title ${this._title}, was published by ${this._author} in ${this._year}.`);
  }
}
