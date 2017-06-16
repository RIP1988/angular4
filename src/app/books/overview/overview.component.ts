import {Component, OnInit} from '@angular/core';
import {Book} from '../book';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  private books: Book[];

  constructor() {
  }

  ngOnInit() {
  }

}
