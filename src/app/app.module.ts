import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {BooksModule} from './books/books.module';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {OverviewComponent} from './books/overview/overview.component';
import {DetailsComponent} from './books/details/details.component';

const appRoutes: Routes = [
  { path: 'books', component: OverviewComponent },
  { path: 'book/:id',      component: DetailsComponent },
  { path: '**', component: OverviewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BooksModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
