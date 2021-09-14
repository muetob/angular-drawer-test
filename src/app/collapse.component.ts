import {Component, Input, OnInit} from '@angular/core';
import {CollapseDirective} from './collapse.directive';

@Component({
  selector: 'app-collapse',
  template: '<ng-content></ng-content>'
})
export class CollapseComponent implements OnInit {

  @Input() title: string;

  constructor(public dir: CollapseDirective) {

  }

  ngOnInit(): void {
    this.dir.title = this.title;
  }

}
