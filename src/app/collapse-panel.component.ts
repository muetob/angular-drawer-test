import {Component, ContentChildren, OnInit, QueryList} from '@angular/core';
import {CollapseDirective} from './collapse.directive';

@Component({
  selector: 'app-collapse-panel',
  template: `<nz-collapse>
    <nz-collapse-panel *ngFor="let collapse of collabses" [nzHeader]="collapseHeader" [nzActive]="collapse.active"
      (nzActiveChange)="collapse.activeChanged($event)">
      <ng-template #collapseHeader>
          <span nz-typography>
            <strong>
              {{ collapse.title }}
            </strong>
          </span>
      </ng-template>
      <ng-container *ngTemplateOutlet="collapse.itemTemplate"></ng-container>
    </nz-collapse-panel>
  </nz-collapse>
  `
})
export class CollapsePanelComponent {
  @ContentChildren(CollapseDirective)
  collabses: QueryList<CollapseDirective>;
}
