import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drawer',
  template: `Drawer

  <ng-content></ng-content>
  `,
})
export class DrawerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
