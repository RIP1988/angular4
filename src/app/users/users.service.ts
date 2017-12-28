import {Injectable} from '@angular/core';
import {User} from './user';
import {USERS} from './mock-users';
import {cloneDeep} from 'lodash';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UsersService {

  users: User[];

  constructor() {
    this.users = cloneDeep(USERS);
  }

  getUsers(): Observable<Array<User>> {
    return new Observable<Array<User>>((observer) => observer.next(cloneDeep(this.users)));
  }
  getUserById(id): Observable<User> {
    return new Observable<User>((observer) => {
      const foundUser = this.users.filter(user => user.id === id)[0];
      observer.next(cloneDeep(foundUser));
    })
  }

}
