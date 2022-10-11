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
  restaurant: Restaurant;
  editMode:boolean = false;

  constructor(private fb: FormBuilder, private apiService:ApiService) { }

  ngOnInit(): void {
    this.formValue = this.fb.group({
      name:[''],
      email:[''],
      mobile:[''],
      address:[''],
      services:['']
    })

    this.getResto();
  }

  private getResto() {
    this.apiService.getRestaurant().subscribe((response: Restaurant[]) => {
      this.restaurantList = response;
      console.log("res", response);
    });
  }

  saveResto(){
    const resto = this.formValue.value;

    if(this.editMode){
      resto.id = this.restaurant.id;
      this.apiService.updateRestaurant(resto, resto.id).subscribe((response)=>{
        console.log('update', response);
        this.getResto();
        this.editMode = false;
        this.formValue.reset();
      })
    }else{
      this.apiService.postRestaurant(resto).subscribe((response)=>{
        // console.log("res",response);
        this.formValue.reset();
        this.getResto();
      })
    }
  }

  onEditResto(restaurant){
    this.editMode = true;
    this.restaurant = restaurant;
    this.formValue.patchValue(restaurant);
  }

  onDeleteResto(restaurant){
    const confirmed = confirm("Are you sure to delete "+restaurant.name+" restaurant?")
    if(confirmed){
      this.apiService.deleteRestaurant(restaurant.id)
      .subscribe((response)=>{
        console.log("delete res",response)
        this.getResto();
      })
    }
  }

}
