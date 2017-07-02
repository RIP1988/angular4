import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DetailsComponent} from './details/details.component';
import {OverviewComponent} from './overview/overview.component';
import {FormsModule} from '@angular/forms';
import {BooksRoutingModule} from './books-routing.module';
import {BooksService} from './books.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BooksRoutingModule
  ],
  exports: [OverviewComponent, DetailsComponent],
  declarations: [DetailsComponent, OverviewComponent],
  providers: [BooksService]
})
export class BooksModule {
}
