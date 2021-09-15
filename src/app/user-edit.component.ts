import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-edit',
  template: `
  <app-collapse-panel>
    <app-collapse title="Title 1" *appCollapse [active]="true" [contentLoading]="true">
      Edit 1
    </app-collapse>
    <app-collapse title="Title 2" *appCollapse>
      Edit 2
    </app-collapse>
  </app-collapse-panel>
  `,
})
export class UserEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
