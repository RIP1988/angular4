import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersOverviewComponent} from './overview/users-overview/users-overview.component';
import {UserDetailsComponent} from './details/user-details/user-details.component';
import {RouterModule, Routes} from '@angular/router';

const userRoutes: Routes = [
  {path: 'users', component: UsersOverviewComponent},
  {path: 'user/:id', component: UserDetailsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class UsersRoutingModule { }
