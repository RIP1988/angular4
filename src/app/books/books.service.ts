import {Injectable} from '@angular/core';
import {Book} from './book';
import {Observable} from 'rxjs/Observable';
import {BOOKS} from './mock-books';

@Injectable()
export class BooksService {

  constructor() {
  }

  getBooks(): Observable<Array<Book>> {
    return new Observable<Array<Book>>(observer => observer.next(BOOKS));
  }

  getBookById(id: number): Observable<Book> {
    return new Observable<Book>(observer => {
       const foundBook = BOOKS.filter(book => book.id === id)[0];
       observer.next(foundBook);
    });
  }

}
