import {Injectable} from '@angular/core';
import {Book} from './book';

@Injectable()
export class BooksService {

  books: Book[];

  constructor() {
  }

  getBooks(): Book[] {
    return this.books;
  }

}
