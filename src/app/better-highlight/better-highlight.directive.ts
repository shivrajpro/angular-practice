import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input } from "@angular/core";

@Directive({
    selector: '[betterHighlight]'
})

export class BetterHighlightDirective implements OnInit{
    @Input() defaultColor: string = 'transparent';
    @Input() highlightColor: string = 'peachpuff';

    @HostBinding('style.backgroundColor') backgroundColor: string;

    constructor(private elRef: ElementRef, private renderer: Renderer2){}

    ngOnInit(){
        this.backgroundColor = this.defaultColor;
    }

    @HostListener('mouseenter') mouseOver(eventData: Event){
        // this.renderer.setStyle(this.elRef.nativeElement,'background-color','peachpuff');
        this.backgroundColor = this.highlightColor;
    }

    @HostListener('mouseleave') mouseOut(eventData: Event){
        // this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent');
        this.backgroundColor = this.defaultColor;
    }
}