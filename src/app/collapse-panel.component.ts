import {Component, ContentChildren, OnInit, QueryList} from '@angular/core';
import {CollapseDirective} from './collapse.directive';

@Component({
  selector: 'app-collapse-panel',
  template: `<nz-collapse>
    <nz-collapse-panel *ngFor="let collapse of collabses" [nzHeader]="collapse.title">
      <ng-container *ngTemplateOutlet="collapse.itemTemplate"></ng-container>
    </nz-collapse-panel>
  </nz-collapse>
  `
})
export class CollapsePanelComponent {
  @ContentChildren(CollapseDirective)
  collabses: QueryList<CollapseDirective>;
}
