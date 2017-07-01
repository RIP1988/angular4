import {Component, OnInit} from "@angular/core";
import {Book} from "../book";
import {BOOKS} from "../mock-books";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  private books: Book[];
  private selectedBook: Book;

  constructor() {
  }

  ngOnInit() {
    this.books = BOOKS;
  }

  selectBook(book): void {
    this.selectedBook = book;
  }

  onBookUpdate(updatedBook) {
    const bookToUpdate = this.books.filter(item => item.id === updatedBook.id)[0];
    Object.assign(bookToUpdate, updatedBook);
  }

}
