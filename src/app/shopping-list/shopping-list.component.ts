import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoggingService } from '../services/logging.service';
import { Ingredient } from "../shared/Ingredient.model";
import * as fromApp from "../store/app.reducer";
import { ShoppingListService } from './services/shopping-list.service';
import * as ShoppingListActions from "./store/shoppingList.actions";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  // providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit {
  // ingredients: Ingredient[] = [];
  ingredients: Observable<{ ingredients: Ingredient[] }>;

  constructor(private shoppingListService: ShoppingListService,
    private logginService: LoggingService,
    private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.ingredients = this.store.select('shoppingList'); // select returns the Observable

    // this.ingredients = this.shoppingListService.getIngredients();

    // this.shoppingListService.ingredientsChanged.subscribe(
    //   (ingredients)=>{
    //     this.ingredients = ingredients;
    //   });

    this.logginService.printLog('from ShoppingListComponent');
  }

  onEditItem(index: number) {
    // this.shoppingListService.startedEditing.next(index);
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }
  // onIngredientAdded(ingredient:Ingredient){
  //   this.ingredients.push(ingredient);
  // }
}
