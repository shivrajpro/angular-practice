import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[]=[
    new Recipe("Duck 1", "Fried Duck 1", "https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261_960_720.jpg"),
    new Recipe("Duck 2", "Fried Duck 2", "https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261_960_720.jpg"),
    new Recipe("Duck 3", "Fried Duck 3", "https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261_960_720.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
