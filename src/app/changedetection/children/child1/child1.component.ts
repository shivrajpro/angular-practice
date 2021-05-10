import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() counter;

  dummyFn(){
    console.log('>> child1 rendered');
  }

}
