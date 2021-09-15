import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  template: `
  <app-collapse-panel>
    <app-collapse title="Title 1" *appCollapse [active]="true" (onActiveChanged)="activeChanged($event, 'tab1')">
      Content 1
    </app-collapse>
    <app-collapse title="Title 2" *appCollapse (onActiveChanged)="activeChanged($event, 'tab2')">
      Content 2
    </app-collapse>
  </app-collapse-panel>
  `,
})
export class UserDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  activeChanged($event: boolean, identifier) {
    console.log('Active changed ', $event, identifier);
  }
}
