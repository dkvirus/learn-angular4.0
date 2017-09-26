import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myUnIf]'
})
export class MyUnIfDirective {
  @Input('myUnIf')
  set myUnIf(unless: boolean){
    console.log(this.templateRef);
    if (!unless) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}
}
