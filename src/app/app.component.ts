import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <a [routerLink]="[{ outlets: { primary: ['user-detail'], drawer: ['user-detail-drawer'] } }]">
      User Details
    </a>

    <router-outlet></router-outlet>

    <app-drawer [visible]="drawerOutlet.isActivated">
      <router-outlet #drawerOutlet="outlet" name="drawer"></router-outlet>
    </app-drawer>
  `
})
export class AppComponent {
  constructor(public route: ActivatedRoute) {
  }
}
