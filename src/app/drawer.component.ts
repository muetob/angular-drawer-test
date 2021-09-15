import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {Subscription} from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import {NzAvatarComponent} from 'ng-zorro-antd';

@Component({
  selector: 'app-drawer',
  template: `
    <ng-template #drawerHeader>
      <div class="drawer-header-container">
        <div class="title-section">
          <nz-space nzSize="middle" nzAlign="center" nzDirection="horizontal">
            <ng-container *ngIf="!!headerAvatars">

            </ng-container>

            <div>
              <span nz-typography><strong>{{ headerPrimaryLabel }}</strong></span>

              <ng-container *ngIf="!!headerSecondaryLabel">
                <nz-divider nzType="vertical"></nz-divider>
                <span nz-typography nzType="secondary">{{ headerSecondaryLabel }}</span>
              </ng-container>
            </div>
          </nz-space>
        </div>

        <div class="actions-section">
          <ng-container *ngIf="headerActions">
            <ng-container *ngTemplateOutlet="headerActions"></ng-container>
          </ng-container>
        </div>

        <div class="close-section">
          <button nz-button nzType="text" (click)="close()">
            <i nz-icon nzType="close"></i>
          </button>
        </div>
      </div>
    </ng-template>

    <nz-drawer
      [nzTitle]="drawerHeader"
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
  styles: [`
    .drawer-header-container {
    padding-right: 5px;

    display: grid;
    align-items: center;
    grid-template-columns: auto auto 48px;

    .title-section {
      justify-self: start;
    }

    .actions-section {
      justify-self: end;
    }

    .close-section {
      justify-self: center;
      padding-left: 24px;
    }
  }

  ::ng-deep .ant-drawer-header {
    border-bottom: none;
  }

  .collapse-inner-content {
    padding: 0 12px;
  }

  .drawer-collapse {
    margin-bottom: 72px;
  }

  .hide-bottom-border {
    border-bottom: none;

    nz-collapse-panel:last-child {
      border-bottom: none;
    }
  }

  `]
})
export class DrawerComponent implements OnInit {
  @Input() visible: boolean = false;

  drawerWidth = '50%';

  private unsub = new Subscription();

  @Input() headerAvatars: TemplateRef<NzAvatarComponent> | null = null;
  @Input() headerActions: TemplateRef<any> | null = null;
  @Input() drawerFooter: TemplateRef<any> | null = null;
  @Input() headerPrimaryLabel: string | null = null;
  @Input() headerSecondaryLabel: string | null = null;

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
