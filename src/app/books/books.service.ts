import {Injectable} from '@angular/core';
import {Book} from './book';
import {Observable} from 'rxjs/Observable';
import {BOOKS} from './mock-books';
import {cloneDeep} from 'lodash';

@Injectable()
export class BooksService {

  constructor() {
  }

  getBooks(): Observable<Array<Book>> {
    return new Observable<Array<Book>>(observer => observer.next(cloneDeep(BOOKS)));
  }

  getBookById(id: number): Observable<Book> {
    return new Observable<Book>(observer => {
      const foundBook = Object.assign({}, BOOKS.filter(book => book.id === id)[0]);
      observer.next(foundBook);
    });
  }

  saveBook(bookToSave: Book): void {
    const foundBook = BOOKS.filter(book => bookToSave.id === book.id)[0];
    if (foundBook) {
      Object.assign(foundBook, bookToSave);
    } else {
      console.log('No book found');
    }
  }

}
