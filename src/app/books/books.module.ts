import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DetailsComponent, OverviewComponent]
})
export class BooksModule { }