import {Directive, TemplateRef} from '@angular/core';

@Directive({
  selector: '[appCollapse]'
})
export class CollapseDirective {
  public itemTemplate: TemplateRef<any>;

  title: string;

  constructor(private templateRef: TemplateRef<any>) {
    this.itemTemplate = templateRef;
  }

}
