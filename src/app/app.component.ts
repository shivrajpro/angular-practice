import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations:[
    trigger('divState',[
      state('normal', style({
        'background-color':'red',
        transform:'translateX(0)'
      })),
      state('highlighted', style({
        backgroundColor:'blue',
        transform:'translateX(100px)'
      })),
      transition('normal <=> highlighted', animate(300)),
      // transition('normal => highlighted', animate(300)),
      // transition('highlighted => normal', animate(800))
    ]),
    trigger('wildState',[
      state('normal', style({
        'background-color':'red',
        transform:'translateX(0) scale(1)'
      })),
      state('highlighted', style({
        backgroundColor:'blue',
        transform:'translateX(100px) scale(1)'
      })),
      state('shrunken', style({
        backgroundColor:'green',
        transform:'translateX(0) scale(0.5)'
      })),
      transition('normal <=> highlighted', animate(300)),
      transition('shrunken <=> *', animate(800)),// *  is wildcard to state shrunken to any
      // transition('highlighted => normal', animate(800))
    ])
  ]
})
export class AppComponent {
  state = 'normal';
  wild = 'normal';

  list = ['Milk', 'Sugar', 'Bread'];

    onAnimate() {
      this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';
      this.wild == 'normal' ? this.wild = 'highlighted' : this.wild = 'normal';
    } 

    onShrink() {
      this.wild == 'shrunken' ? this.wild = 'normal': this.wild = 'shrunken';
    }
    onAdd(item) {
      this.list.push(item);
    }
}
