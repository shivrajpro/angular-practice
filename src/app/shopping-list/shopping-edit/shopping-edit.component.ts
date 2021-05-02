import { Component, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/Ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from "../store/shoppingList.actions";
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('f') slForm: NgForm;
  editSubscription: Subscription;
  editMode: boolean = false;
  editItemIndex: number;
  editingItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService,
              private store: Store<{shoppingList:{ingredient:Ingredient[]}}>) { }

  ngOnInit(): void {
    this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editItemIndex = index;
        this.editMode = true;
        this.editingItem = this.shoppingListService.getIngredient(this.editItemIndex);
        this.slForm.setValue({
          'name': this.editingItem.name,
          'amount': this.editingItem.amount
        });
      }
    );
  }

  onSubmitItem(form: NgForm) {
    const value = form.value;
    const ingName = value.name;
    const ingAmount = value.amount;
    const newIngredient = new Ingredient(ingName, ingAmount);

    if(this.editMode)
      this.shoppingListService.updateIngrediemt(this.editItemIndex, newIngredient);
    else
      this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));
      //expects an object of ShoppingListActions
      // this.shoppingListService.addIngredient(newIngredient);
    // this.ingredientAdded.emit(newIngredient);
    this.slForm.reset();
    this.editMode = false;
  }

  onDeleteItem(){
    this.onClear();
    this.shoppingListService.deleteIngredient(this.editItemIndex);
  }

  onClear(){
    this.slForm.reset();
    this.editMode =false;
  }
}
