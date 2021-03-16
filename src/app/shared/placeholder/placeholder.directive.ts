import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector:'[appPlaceholder]'
})
// used as container to hold dynamic AlertComponent
export class PlaceholderDirective{
    constructor(public viewContainerRef: ViewContainerRef){}
}