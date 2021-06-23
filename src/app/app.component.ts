import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title: string = 'Angular Material';
  
  showElements = {
    "typography":false,
    "buttons":true
  }
  
  constructor(){}

  ngOnInit(){
  }
}
