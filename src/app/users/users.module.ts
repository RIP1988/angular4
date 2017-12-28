import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersRoutingModule} from './users-routing.module';
import { UserDetailsComponent } from './details/user-details/user-details.component';
import { UsersOverviewComponent } from './overview/users-overview/users-overview.component';
import {UsersService} from './users.service';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  exports: [UserDetailsComponent, UsersOverviewComponent],
  declarations: [UserDetailsComponent, UsersOverviewComponent],
  providers: [UsersService]
})
export class UsersModule { }
