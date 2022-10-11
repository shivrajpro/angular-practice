import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-restaurant-dashboard',
  templateUrl: './restaurant-dashboard.component.html',
  styleUrls: ['./restaurant-dashboard.component.css']
})
export class RestaurantDashboardComponent implements OnInit {
  formValue:FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.fb.group({
      name:[''],
      email:[''],
      mobile:[''],
      address:[''],
      services:['']
    })
  }

}
