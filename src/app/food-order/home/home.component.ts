import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from "../../services/food/food.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods:any;
  constructor(private fs: FoodService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      if(params.searchItem){
        this.foods = this.fs.getAll().filter((f)=>f.name.toLowerCase().includes(params.searchItem.toLowerCase()))
      }
      else if(params.tag){
        this.foods = this.fs.getAllFoodsByTag(params.tag)
      }
      else{
        this.foods = this.fs.getAll();
      }
    })
  }

}
