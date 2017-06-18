import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DetailsComponent} from './details/details.component';
import {OverviewComponent} from './overview/overview.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [OverviewComponent, DetailsComponent],
  declarations: [DetailsComponent, OverviewComponent]
})
export class BooksModule {
}
