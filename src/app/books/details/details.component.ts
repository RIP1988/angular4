import {Component, OnInit} from '@angular/core';
import {Book} from '../book';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  book: Book;

  constructor() {
  }

  ngOnInit() {
  }

  saveChanges() {
    console.log('save changes');
  }

}
