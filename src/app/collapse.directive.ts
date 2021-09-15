import {Directive, EventEmitter, TemplateRef} from '@angular/core';

@Directive({
  selector: '[appCollapse]'
})
export class CollapseDirective {
  public itemTemplate: TemplateRef<any>;

  title: string;
  active: boolean;
  onActiveChanged: EventEmitter<boolean> = new EventEmitter();

  constructor(private templateRef: TemplateRef<any>) {
    this.itemTemplate = templateRef;
  }

  activeChanged(changed: boolean): void {
    this.onActiveChanged.emit(changed);
  }
}
