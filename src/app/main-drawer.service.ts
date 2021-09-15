import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainDrawerService {
  drawerPrimaryHeaderSubject = new Subject<string>();

  primaryHeader$ = this.drawerPrimaryHeaderSubject.asObservable();

  setPrimaryHeader(title: string): void {
    this.drawerPrimaryHeaderSubject.next(title);
  }
}
