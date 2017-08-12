import {Injectable} from '@angular/core';
import {Book} from './book';
import {Observable} from 'rxjs/Observable';
import {BOOKS} from './mock-books';
import {cloneDeep} from 'lodash';

@Injectable()
export class BooksService {

  private books: Book[];

  constructor() {
    this.books = cloneDeep(BOOKS);
  }

  getBooks(): Observable<Array<Book>> {
    return new Observable<Array<Book>>(observer => observer.next(cloneDeep(this.books)));
  }

  getBookById(id: number): Observable<Book> {
    return new Observable<Book>(observer => {
      const foundBook = Object.assign({}, this.books.filter(book => book.id === id)[0]);
      observer.next(foundBook);
    });
  }

  saveBook(bookToSave: Book): void {
    const foundBook = this.books.filter(book => bookToSave.id === book.id)[0];
    if (foundBook) {
      Object.assign(foundBook, bookToSave);
    } else {
      bookToSave.id = this.books.length + 1;
      this.books.push(bookToSave);
    }
  }

}
