import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {User} from './user';
import {Observable, of} from 'rxjs';


@Injectable({ providedIn: 'root' })
export class UserResolver implements Resolve<User> {
  users: User[] = [
    {name: 'User 1', id: 1},
    {name: 'User 2', id: 2},
    {name: 'User 3', id: 3},
  ];

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> | Promise<User> | User {
    return of(this.users.find(user => user.id === +route.paramMap.get('id')));
  }
}
