import {Component, OnInit} from '@angular/core';
import {Book} from '../book';
import {ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {BooksService} from '../books.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  book: Book;

  constructor(private route: ActivatedRoute, private bookService: BooksService) {
  }

  ngOnInit() {
    this.route.paramMap.switchMap((params: ParamMap) => this.bookService.getBookById(+params.get('id')))
      .subscribe(book => this.book = book);
  }

  saveChanges() {
    console.log('save changes');
  }

}
