import {Component, OnInit} from "@angular/core";
import {Book} from "../book";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import "rxjs/add/operator/switchMap";
import {BooksService} from "../books.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  book: Book;

  constructor(private route: ActivatedRoute, private bookService: BooksService, private router: Router) {
  }

  ngOnInit() {
    this.route.paramMap.switchMap((params: ParamMap) => this.bookService.getBookById(+params.get('id')))
      .subscribe(book => this.book = Object.assign({}, book));
  }

  saveChanges() {
    this.bookService.saveBook(this.book);
    this.backToOverview();
  }

  backToOverview() {
    this.router.navigate(['/books']);
  }

}
