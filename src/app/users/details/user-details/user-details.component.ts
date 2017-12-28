import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../users.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {User} from '../../user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: User;

  constructor(private usersService: UsersService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.paramMap.switchMap((params: ParamMap) => this.usersService.getUserById(+params.get('id')))
      .subscribe((user) => this.user = user);
  }

}
