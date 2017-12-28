import {Component, OnInit} from '@angular/core';
import {Book} from '../book';
import {Router} from '@angular/router';
import {BooksService} from '../books.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  private books: Book[];

  constructor(private router: Router, private booksService: BooksService) {
  }

  ngOnInit() {
    this.booksService.getBooks().subscribe(books => this.books = books);
  }

  showDetails(book): void {
    this.router.navigate(['/book', book.id]);
  }

  onBookUpdate(updatedBook) {
    const bookToUpdate = this.books.filter(item => item.id === updatedBook.id)[0];
    Object.assign(bookToUpdate, updatedBook);
  }

}
