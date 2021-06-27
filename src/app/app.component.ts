import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'Angular Material';

  minDate = new Date(2021, 6, 28);
  maxDate = new Date(2021, 10, 27);//(new Date()).getMilliseconds;
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
    "snackbar":true,
    "datePicker": false,
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
    "checkbox": false,
    "radio": false
  }

  constructor(private snackbar:MatSnackBar) { }

  ngOnInit() {
    this.filteredUISkills = this.uiSkillFormCtrl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterUISkills(value))
    )
  }

  openCustomSnackbar(){
    this.snackbar.openFromComponent(CustomSnackbarComponent, {duration:1000});
  }
  
  openSnackbar(){
    const snackbarRef = this.snackbar.open("Item was deleted","dismiss", {duration:1000});

    snackbarRef.afterDismissed().subscribe(()=>{
      console.log('>> after dismiss');
    });

    snackbarRef.onAction().subscribe(()=>{
      console.log('>> on action');
    })
  }
  noWeekendFilter = (date: Date) => {
    const d = date.getDay();

    return d != 0 && d != 6;
  }

  private _filterUISkills(inputSkill: string): string[] {
    inputSkill = inputSkill.toLocaleLowerCase();
    console.log('>> inputSkill', inputSkill);

    return this.uiSkillNames.filter(skill => skill.toLocaleLowerCase().includes(inputSkill));
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

@Component({
  selector:'custom-snackbar',
  template:`<span style="color:orange" >custom snackbar</span>`
})
export class CustomSnackbarComponent{}