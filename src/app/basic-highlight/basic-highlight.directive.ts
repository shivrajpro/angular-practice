import { Directive, OnInit, ElementRef } from "@angular/core";

@Directive({
    selector : '[basicHighlight]'
})

export class BasicHighlightDirective implements OnInit{

    constructor(private elementRef: ElementRef){}

    ngOnInit(): void {
        this.elementRef.nativeElement.style.backgroundColor = 'aqua';
    }

}