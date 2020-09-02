import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[]=[
    new Recipe("Chapati", "Fried Chapati", "https://cdn.pixabay.com/photo/2014/10/15/05/05/chapati-489254_960_720.jpg"),
    new Recipe("Paneer", "Palak Paneer", "https://media.istockphoto.com/photos/palak-paneer-at-grey-concrete-background-picture-id1166167732"),
    new Recipe("Pizza", "Margherita", "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg")
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe : Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
