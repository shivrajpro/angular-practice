import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'Angular Material';

  filteredUISkills: Observable<string[]>;
  uiSkillFormCtrl = new FormControl();

  uiSkillNames = ["Angular", "Angular Material", "React", "React Native", "Vue"];
  uiSkills = [
    { 'name': 'Angular' },
    { 'name': 'Angular Material' },
    { 'name': 'React' },
    { 'name': 'Vue' }
  ];

  allUISkills = ["angular", "react", "vue"];
  selectedUISkills = [];
  sideNavOpened = false;

  showElements = {
    "typography": false,
    "buttons": false,
    "buttonToggle": false,
    "icons": false,
    "badges": false,
    "spinner": false,
    "toolbar": true,
    "sidenav": false,
    "menu": false,
    "gridList": false,
    "expansion": false,
    "card": false,
    "tabs": false,
    "stepper": false,
    "formField": false,
    "tooltip": false,
    "autocomplete": false,
    "checkbox":false,
    "radio":true
  }

  constructor() { }

  ngOnInit() {
    this.filteredUISkills = this.uiSkillFormCtrl.valueChanges.pipe(
      startWith(''),
      map(value=>this._filterUISkills(value))
    )
  }

  private _filterUISkills(inputSkill:string):string[]{
    inputSkill = inputSkill.toLocaleLowerCase();
    console.log('>> inputSkill',inputSkill);
    
    return this.uiSkillNames.filter(skill=>skill.toLocaleLowerCase().includes(inputSkill));
  }

  displayFn(subject) {
    return subject ? subject.name : undefined;
  }

  log(state) {
    console.log('>> ', state);
  }

  uiSelectionChanged(selectedValues) {
    console.log('>> ', selectedValues);

  }

  invertUISkills() {
    const newSelectedSkills = [];

    for (const skill of this.allUISkills) {
      if (this.selectedUISkills.indexOf(skill) === -1)
        newSelectedSkills.push(skill);
    }

    this.selectedUISkills = newSelectedSkills.slice();
    console.log('>>selectedUISkills', this.selectedUISkills);
  }
}
