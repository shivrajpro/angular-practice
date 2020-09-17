import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../services/recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe : Recipe;
  id: number;

  constructor(private recipeService: RecipeService, 
              private route: ActivatedRoute,
              private router: Router) { 
    // console.log(this.recipe);
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id = +params['id'];

        this.recipe = this.recipeService.getRecipe(this.id);
        // console.log(this.recipe);
      }
    );     
  }

  onAddToShopList(){
    this.recipeService.addIngToShopList(this.recipe.ingredients);
    this.router.navigate(['/shopping-list']);
  }

  onEditRecipe(){
    // this.router.navigate(['edit'], {relativeTo: this.route});
    this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['../'], {relativeTo:this.route});
  }
}
