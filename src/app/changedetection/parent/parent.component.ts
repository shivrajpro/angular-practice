import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  counter: number = 0;
  c1Counter: number = 0;
  c2Counter: number = 0

  constructor() { }

  ngOnInit(): void {
  }

  updateCounter() {
    this.counter += 1;
  }

  updateChild1Counter() {
    this.c1Counter += 1;
  }

  updateChild2Counter() {
    this.c2Counter += 1;
  }

}
