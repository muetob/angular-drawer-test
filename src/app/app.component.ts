import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MainDrawerService} from './main-drawer.service';

@Component({
  selector: 'app-root',
  template: `
    <a [routerLink]="[{ outlets: { primary: ['user-detail', 1], drawer: ['user-detail-drawer'] } }]">
      User 1
    </a>
    <a [routerLink]="[{ outlets: { primary: ['user-detail', 2], drawer: ['user-detail-drawer'] } }]">
      User 2
    </a>
    <a [routerLink]="[{ outlets: { primary: ['user-detail', 3], drawer: ['user-detail-drawer'] } }]">
      User 3
    </a>

    <ng-template #actions>
      <button nz-button nzType="primary">Save</button>
    </ng-template>

    <router-outlet></router-outlet>

    <app-drawer
      [visible]="drawerOutlet.isActivated"
      [headerPrimaryLabel]="mainDrawerService.primaryHeader$ | async"
      [headerActions]="actions">
      <router-outlet #drawerOutlet="outlet" name="drawer"></router-outlet>
    </app-drawer>
  `,
  providers: [{provide: MainDrawerService}]
})
export class AppComponent {
  constructor(public route: ActivatedRoute, public mainDrawerService: MainDrawerService) {
  }
}
