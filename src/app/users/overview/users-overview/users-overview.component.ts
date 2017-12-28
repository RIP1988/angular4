import {Component, OnInit} from '@angular/core';
import {User} from '../../user';
import {UsersService} from '../../users.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-users-overview',
  templateUrl: './users-overview.component.html',
  styleUrls: ['./users-overview.component.css']
})
export class UsersOverviewComponent implements OnInit {

  users: User[];

  constructor(private usersService: UsersService, private router: Router) {
  }

  ngOnInit() {
    this.usersService.getUsers().subscribe((users) => this.users = users);
  }

  showDetails(user: User): void {
    this.router.navigate(['/user', user.id])
  }

}
