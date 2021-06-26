import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title: string = 'Angular Material';
  
  allUISkills = ["angular","react","vue"];
  selectedUISkills = [];
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
    "gridList":false,
    "expansion":false,
    "card":false,
    "tabs":false,
    "stepper":false,
    "formField":true
  }
  
  constructor(){}

  ngOnInit(){
  }

  log(state){
    console.log('>> ',state);
  }

  uiSelectionChanged(selectedValues){
    console.log('>> ',selectedValues);
    
  }

  invertUISkills(){
    const newSelectedSkills = [];

    for (const skill of this.allUISkills) {
      if(this.selectedUISkills.indexOf(skill) === -1)
        newSelectedSkills.push(skill);
    }

    this.selectedUISkills = newSelectedSkills.slice();
    console.log('>>selectedUISkills',this.selectedUISkills);
  }
}
