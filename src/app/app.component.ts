import { animate, group, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        backgroundColor: 'blue',
        transform: 'translateX(100px)'
      })),
      transition('normal <=> highlighted', animate(300)),
      // transition('normal => highlighted', animate(300)),
      // transition('highlighted => normal', animate(800))
    ]),

    trigger('wildState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0) scale(1)'
      })),
      state('highlighted', style({
        backgroundColor: 'blue',
        transform: 'translateX(100px) scale(1)'
      })),
      state('shrunken', style({
        backgroundColor: 'green',
        transform: 'translateX(0) scale(0.5)'
      })),
      transition('normal <=> highlighted', animate(300)),
      transition('shrunken <=> *', [
        style({
          'background-color': 'orange'
        }),
        animate(1000, style({
          borderRadius: '50px'
        })),
        animate(500)
      ])// *  is wildcard to state shrunken to any
    ]),

    trigger('list1', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      //void means no state
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(400)]
      ),
      transition('* => void', [
        animate(400), style({
          transform: 'translate(100px)',
          opacity: 0
        })
      ])
    ]),

    trigger('list2', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        animate(2000, keyframes([
          style({
            transform: 'translateX(-100px)',
            opacity: 0,
            offset: 0
          }),
          style({
            transform: 'translateX(-50px)',
            opacity: 0.5,
            offset: 0.3
          }),
          style({
            transform: 'translateX(-20px)',
            opacity: 1,
            offset: 0.8
          }),
          style({
            transform: 'translateX(0px)',
            opacity: 0,
            offset: 1
          })
        ]))
      ]),
      transition('* => void', [
        group([
          animate(400, style({
            color: 'red'
          })),
          animate(700, style({
            textDecoration: 'line-through',
            transform: 'translate(100px)',
            opacity: 0
          }))
        ])
      ])
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
    this.wild = 'shrunken';// ? this.wild = 'normal': this.wild = 'shrunken';
  }

  onAdd(item) {
    this.list.push(item);
  }

  onDelete(item) {
    this.list.splice(this.list.indexOf(item), 1);
  }

  animationStarted(evt){
    console.log('start = ',evt);
  }

  animationEnded(evt){
    console.log('end = ',evt);
  }
}
