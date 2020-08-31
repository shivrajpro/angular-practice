import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[]=[
    new Recipe("Duck", "Fried Duck", "https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261_960_720.jpg"),
    new Recipe("Duck", "Fried Duck", "https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261_960_720.jpg"),
    new Recipe("Duck", "Fried Duck", "https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261_960_720.jpg"),
    new Recipe("Duck", "Fried Duck", "https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261_960_720.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
