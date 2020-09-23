import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { Ingredient } from "../shared/Ingredient.model";
import { ShoppingListService } from './services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  // providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[]=[];

  constructor(private shoppingListService: ShoppingListService,
              private logginService: LoggingService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();

    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients)=>{
        this.ingredients = ingredients;
      });
    
      this.logginService.printLog('from ShoppingListComponent');
  }

  onEditItem(index:number){
    this.shoppingListService.startedEditing.next(index);
  }
  // onIngredientAdded(ingredient:Ingredient){
  //   this.ingredients.push(ingredient);
  // }
}
