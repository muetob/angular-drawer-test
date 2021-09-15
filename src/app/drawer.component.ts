import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-drawer',
  template: `
  <nz-drawer
    [nzWidth]="drawerWidth"
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

  drawerWidth = '50%';

  private unsub = new Subscription();

  constructor(private breakpoints: BreakpointObserver) { }

  ngOnInit(): void {

    this.unsub.add(
      this.breakpoints.observe(['(max-width: 1440px)', '(max-width: 960px)']).subscribe(result => {
        const is1440px = result.breakpoints['(max-width: 1440px)'];
        const is960px = result.breakpoints['(max-width: 960px)'];

        if (is960px) {
          this.drawerWidth = '100%';
          return;
        }

        if (is1440px) {
          this.drawerWidth = '65%';
          return;
        }

        this.drawerWidth = '50%';
      })
    );
  }

  close(): void {
    this.visible = false;
  }

  open(): void {
    this.visible = true;
  }
}
