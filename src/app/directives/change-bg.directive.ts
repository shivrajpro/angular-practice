import { Directive, Input, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeBg]'
})
export class ChangeBgDirective {

  @Input() isCorrect: boolean = false;
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') answer(){
    if(this.isCorrect){
      this.renderer.setStyle(this.elRef.nativeElement, 'background', 'green');
      this.renderer.setStyle(this.elRef.nativeElement, 'color', '#fff');
      this.renderer.setStyle(this.elRef.nativeElement, 'border', '2px solid grey');
    }else{
      this.renderer.setStyle(this.elRef.nativeElement, 'background', 'red');
      this.renderer.setStyle(this.elRef.nativeElement, 'color', '#fff');
      this.renderer.setStyle(this.elRef.nativeElement, 'border', '2px solid grey');
    }
  }

}
