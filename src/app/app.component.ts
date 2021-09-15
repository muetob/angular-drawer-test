import { Component } from '@angular/core';

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
  `
})
export class AppComponent {
  title = 'ant-playground';
}
