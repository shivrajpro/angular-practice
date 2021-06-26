import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title: string = 'Angular Material';
  
  sideNavOpened = false;

  showElements = {
    "typography":false,
    "buttons":false,
    "buttonToggle":false,
    "icons":false,
    "badges":false,
    "spinner":false,
    "toolbar":true,
    "sidenav":false,
    "menu":false,
    "gridList":true
  }
  
  constructor(){}

  ngOnInit(){
  }

  log(state){
    console.log('>> ',state);
  }
}
