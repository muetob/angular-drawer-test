import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CollapseDirective} from './collapse.directive';

@Component({
  selector: 'app-collapse',
  template: '<ng-content></ng-content>'
})
export class CollapseComponent implements AfterViewInit {

  @Input() title: string;
  @Input() active: boolean;
  @Output() onActiveChanged: EventEmitter<boolean> = new EventEmitter();

  constructor(public dir: CollapseDirective) {

  }

  ngAfterViewInit(): void {
    this.dir.title = this.title;
    this.dir.active = this.active;
    this.dir.onActiveChanged = this.onActiveChanged;
  }

}
