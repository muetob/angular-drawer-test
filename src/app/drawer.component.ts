import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drawer',
  template: `
  <button nz-button nzType="primary" (click)="open()">Open Drawer</button>

  <nz-drawer
    [nzClosable]="true"
    [nzVisible]="visible"
    nzPlacement="right"
    nzTitle="Basic Drawer"
    (nzOnClose)="close()"
  >
    <ng-content></ng-content>
  </nz-drawer>
  `,
})
export class DrawerComponent implements OnInit {
  visible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  close(): void {
    this.visible = false;
  }

  open(): void {
    this.visible = true;
  }
}
