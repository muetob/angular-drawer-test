import {Component, ContentChildren, OnInit, QueryList} from '@angular/core';
import {CollapseDirective} from './collapse.directive';

@Component({
  selector: 'app-collapse-panel',
  template: `
    <nz-collapse>
      <nz-collapse-panel
        *ngFor="let collapsePanel of collapsePanels"
        [nzHeader]="collapseHeader"
        [nzActive]="collapsePanel.active"
        (nzActiveChange)="collapsePanel.activeChanged($event)">

        <ng-template #collapseHeader>
          <span nz-typography>
            <strong>
              {{ collapsePanel.title }}
            </strong>
          </span>
        </ng-template>

        <ng-template #loadedContent>
          <ng-container *ngTemplateOutlet="collapsePanel.itemTemplate"></ng-container>
        </ng-template>

        <ng-container *ngIf="collapsePanel.contentLoading; else loadedContent">
          <nz-skeleton [nzActive]="true"></nz-skeleton>
        </ng-container>
      </nz-collapse-panel>
    </nz-collapse>
  `
})
export class CollapsePanelComponent {
  @ContentChildren(CollapseDirective)
  collapsePanels: QueryList<CollapseDirective>;
}
