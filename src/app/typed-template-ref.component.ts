import {Component, Input, OnInit, TemplateRef} from '@angular/core';

export interface TypedTemplateRefItem {
  name: string;
  bla: string;
}

@Component({
  selector: 'app-typed-template-ref',
  template: `
    <div>
      <ng-container *ngTemplateOutlet="template; context: context;">
      </ng-container>
    </div>
  `
})
export class TypedTemplateRefComponent implements OnInit {
  item: TypedTemplateRefItem = {name: 'Name', bla: 'bla'};

  context: {$implicit: TypedTemplateRefItem} = {$implicit: this.item};

  @Input() template: TemplateRef<TypedTemplateRefItem>;

  constructor() { }

  ngOnInit(): void {
  }

}
