import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  template: `
  <app-collapse-panel>
    <app-collapse title="Title 1" *appCollapse>
      Content 1
    </app-collapse>
    <app-collapse title="Title 2" *appCollapse>
      Content 2
    </app-collapse>
  </app-collapse-panel>
  `,
})
export class UserDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
