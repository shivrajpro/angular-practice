import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Restaurant } from "../models/restaurant";

@Component({
  selector: 'app-restaurant-dashboard',
  templateUrl: './restaurant-dashboard.component.html',
  styleUrls: ['./restaurant-dashboard.component.css']
})
export class RestaurantDashboardComponent implements OnInit {
  formValue:FormGroup;
  restaurantList: Restaurant[] = [];

  constructor(private fb: FormBuilder, private apiService:ApiService) { }

  ngOnInit(): void {
    this.formValue = this.fb.group({
      name:[''],
      email:[''],
      mobile:[''],
      address:[''],
      services:['']
    })

    this.apiService.getRestaurant().subscribe((response:Restaurant[])=>{
      this.restaurantList = response;
      console.log("res",response);
    })
  }

  saveResto(){
    const resto = this.formValue.value;

    this.apiService.postRestaurant(resto).subscribe((response)=>{
      // console.log("res",response);
      this.formValue.reset();
      
    })
  }

}
