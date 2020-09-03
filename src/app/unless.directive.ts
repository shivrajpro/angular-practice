import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})

//this directiev works contrary to ngIf directive...show element if condition is false
export class UnlessDirective {
  @Input() set appUnless(condition:boolean){

    if(!condition){
      //crate element
      this.vcRef.createEmbeddedView(this.templateRef);
    }else{
      //clear element
      this.vcRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
