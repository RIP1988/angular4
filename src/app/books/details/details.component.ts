import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from '../book';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input()
  book: Book;

  @Output()
  bookUpdate: EventEmitter<Book> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  saveChanges() {
    console.log('save changes');
  }

}
