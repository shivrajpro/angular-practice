import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog } from "@angular/material/dialog";
import { DialogComponent } from './dialog/dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title: string = 'Angular Material';

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

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
    "multiselect":true,
    "virtualScrolling":false,
    "table": false,
    "dialog": false,
    "snackbar": false,
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

  numbers:number[] = [];

  constructor(private snackbar: MatSnackBar, private dialog: MatDialog) { }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  onRowClick(row) {
    console.log('>>', row);
  }

  filterTable(searchInput: string) {
    this.dataSource.filter = searchInput.trim().toLowerCase();
  }

  ngOnInit() {
    this.filteredUISkills = this.uiSkillFormCtrl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterUISkills(value))
    )

    for (let i = 1; i<=1000; i++)
      this.numbers.push(i);
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, { data: { name: 'Shivraj' } });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`>> Dialog result:${result}`);
    })
  }

  openCustomSnackbar() {
    this.snackbar.openFromComponent(CustomSnackbarComponent, { duration: 1000 });
  }

  openSnackbar() {
    const snackbarRef = this.snackbar.open("Item was deleted", "dismiss", { duration: 1000 });

    snackbarRef.afterDismissed().subscribe(() => {
      console.log('>> after dismiss');
    });

    snackbarRef.onAction().subscribe(() => {
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
  selector: 'custom-snackbar',
  template: `<span style="color:orange" >custom snackbar</span>`
})
export class CustomSnackbarComponent { }