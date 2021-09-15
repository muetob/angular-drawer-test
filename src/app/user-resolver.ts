import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {User} from './user';
import {Observable, of} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserResolver implements Resolve<User> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> | Promise<User> | User {
    return of({name: 'User 1', id: 1});
  }
}
