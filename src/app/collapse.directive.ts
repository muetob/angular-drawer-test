import {Directive, EventEmitter, Input, TemplateRef} from '@angular/core';

@Directive({
  selector: '[appCollapse]'
})
export class CollapseDirective {
  public itemTemplate: TemplateRef<any>;

  title: string;
  active: boolean;
  contentLoading: boolean;
  onActiveChanged: EventEmitter<boolean> = new EventEmitter();

  constructor(private templateRef: TemplateRef<any>) {
    this.itemTemplate = templateRef;
  }

  activeChanged(changed: boolean): void {
    this.onActiveChanged.emit(changed);
  }
}
