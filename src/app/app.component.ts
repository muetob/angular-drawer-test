import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MainDrawerService} from './main-drawer.service';
import {TypedTemplateRefItem} from './typed-template-ref.component';

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

    <ng-template let-item #templateRef>
      <ng-template [ngIf]="identity(item)" let-args="ngIf">
        The name is {{args.bla}}
      </ng-template>
    </ng-template>

    <app-typed-template-ref [template]="templateRef"></app-typed-template-ref>

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

  identity(item: TypedTemplateRefItem): TypedTemplateRefItem {
    return item;
  }
}
