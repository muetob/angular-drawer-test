import { Component, OnInit } from '@angular/core';
import {User} from './user';
import {ActivatedRoute} from '@angular/router';
import {MainDrawerService} from './main-drawer.service';

@Component({
  selector: 'app-user-detail',
  template: `
  <app-collapse-panel>
    <app-collapse title="Detail 1" *appCollapse [active]="true" (onActiveChanged)="activeChanged($event, 'tab1')">
      Content 1
    </app-collapse>
    <app-collapse title="Detail 2" *appCollapse (onActiveChanged)="activeChanged($event, 'tab2')">
      Content 2
    </app-collapse>
  </app-collapse-panel>
  `,
})
export class UserDetailComponent implements OnInit {
  user: User;

  constructor(private route: ActivatedRoute, private mainDrawerServiceService: MainDrawerService) { }

  ngOnInit(): void {
    this.user = this.route.snapshot.data['user'] as User;

    if (this.user) {
      const header = `Details of user ${this.user.name}`;

      console.log('Set drawer header to', header);

      this.mainDrawerServiceService.setPrimaryHeader(header);
    }
  }

  activeChanged($event: boolean, identifier) {
    console.log('Active changed ', $event, identifier);
  }
}
