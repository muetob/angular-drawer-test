import { Component, OnInit } from '@angular/core';

interface Item {
  id: number;
  name: string;
}

@Component({
  selector: 'app-main-content',
  template: `
    <div>
      Detail page

      <app-user-detail></app-user-detail>
    </div>

    <ng-template #actions>
      <button nz-button nzType="primary">Save</button>
    </ng-template>

    <app-drawer #detailDrawer headerPrimaryLabel="Details" [headerActions]="actions">
      <app-user-detail></app-user-detail>
    </app-drawer>

    <button nz-button nzType="primary" (click)="detailDrawer.open()">Open Detail Drawer</button>

    <app-drawer #editDrawer headerPrimaryLabel="Edit">
      <app-user-edit></app-user-edit>
    </app-drawer>

    <button nz-button nzType="primary" (click)="editDrawer.open()">Open Edit Drawer</button>

    <div *ngFor="let item of (items | sortedItems: 'name')">
      {{item.name}}
    </div>
  `
})
export class MainContentComponent implements OnInit {

  title = 'ant-playground';

  items: Item[] = [
    {
      id: 2,
      name: 'a',
    },
    {
      id: 1,
      name: 'aaa',
    },
    {
      id: 4,
      name: 'aa',
    },

    {
      id: 3,
      name: 'aaaaa',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
