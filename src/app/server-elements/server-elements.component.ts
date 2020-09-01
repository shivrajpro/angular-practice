import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-server-elements',
  templateUrl: './server-elements.component.html',
  styleUrls: ['./server-elements.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementsComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;

  constructor() {
    console.log("constructor");

  }

  ngOnInit(): void {
    console.log("ngOnInit");

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges");
    console.log(changes);
  }

  ngDoCheck(): void {
    console.log("ngDoCheck");

  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");

  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");

  }

  
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }
  
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }
}
