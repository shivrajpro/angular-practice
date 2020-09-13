import { Ingredient } from '../shared/Ingredient.model';

export class Recipe {
    public name: string;
    public description: string;
    public imagepath: string;
    public ingredients: Ingredient[];

    constructor(name: string, desc: string, imgPath: string, ingredients: Ingredient[]) {
        this.name=name;
        this.description=desc;
        this.imagepath=imgPath;
        this.ingredients = ingredients;
    }
}