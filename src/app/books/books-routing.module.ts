import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {OverviewComponent} from './overview/overview.component';
import {DetailsComponent} from './details/details.component';

const bookRoutes: Routes = [
  {path: 'books', component: OverviewComponent},
  {path: 'book/:id', component: DetailsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(bookRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class BooksRoutingModule { }
