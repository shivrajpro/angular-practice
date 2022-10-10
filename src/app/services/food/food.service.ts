import { Injectable } from '@angular/core';
import { Foods } from "../../food-order/shared/models/food";
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(foodId:number){
    return this.getAll().find((f)=>f.id == foodId);
  }
  getAllTags(){
    return [
      {
        name:'All',
        count: 8
      },
      {
        name:'Fastfood',
        count: 4
      },
      {
        name:"Pizza",
        count:2
      },
      {
        name:"Lunch",
        count: 1
      }
    ]
  }

  getAllFoodsByTag(tag): any {
    return tag == 'All' ? this.getAll()
      : this.getAll().filter((f) => f.tags.includes(tag));
  }

  getAll(): Foods[]{
    return [
      {
        id:1,
        price:40,
        name:"Shoe 1",
        favorite : false,
        star:4,
        tags:['Fastfood', 'Pizza', 'lunch'],
        imageUrl:'assets/images/formal_brown.jpg',
        cookTime:'25-30',
        origins:['italy']        
      },
      {
        id:2,
        price:50,
        name:"Shoe 2",
        favorite : true,
        star:4,
        tags:['Fastfood', 'Pizza', 'Lunch'],
        imageUrl:'assets/images/formal_brown.jpg',
        cookTime:'35-40',
        origins:['italy']        
      },
      {
        id:3,
        price:50,
        name:"Shoe 3",
        favorite : false,
        star:4,
        tags:['Fastfood', 'Pizza', 'Lunch'],
        imageUrl:'assets/images/formal_brown.jpg',
        cookTime:'35-40',
        origins:['italy']        
      },
      {
        id:4,
        price:50,
        name:"Shoe 4",
        favorite : false,
        star:4,
        tags:['Fastfood', 'Pizza', 'Lunch'],
        imageUrl:'assets/images/formal_brown.jpg',
        cookTime:'35-40',
        origins:['italy']        
      },
      {
        id:5,
        price:50,
        name:"Shoe 5",
        favorite : false,
        star:4,
        tags:['Fastfood', 'Pizza', 'Lunch'],
        imageUrl:'assets/images/formal_brown.jpg',
        cookTime:'35-40',
        origins:['italy']        
      },
      {
        id:6,
        price:50,
        name:"Shoe 6",
        favorite : false,
        star:4,
        tags:['Fastfood', 'Pizza', 'Lunch'],
        imageUrl:'assets/images/formal_brown.jpg',
        cookTime:'35-40',
        origins:['italy']        
      },
      {
        id:7,
        price:50,
        name:"Shoe 7",
        favorite : false,
        star:4,
        tags:['Fastfood', 'Pizza', 'Lunch'],
        imageUrl:'assets/images/formal_brown.jpg',
        cookTime:'35-40',
        origins:['italy']        
      },
      {
        id:8,
        price:50,
        name:"Shoe 8",
        favorite : false,
        star:4,
        tags:['Fastfood', 'Pizza', 'Lunch'],
        imageUrl:'assets/images/formal_brown.jpg',
        cookTime:'35-40',
        origins:['italy']        
      }
    ];
  }
}
