import { Component } from '@angular/core';

interface Item {
  id: number;
  name: string;
}


@Component({
  selector: 'app-root',
  template: `
    <div>
      Detail page

      <app-user-detail></app-user-detail>
    </div>


    <app-drawer>
      <app-user-detail></app-user-detail>
    </app-drawer>

    <div *ngFor="let item of (items | sortedItems: 'name')">
      {{item.name}}
    </div>
  `
})
export class AppComponent {
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
}
