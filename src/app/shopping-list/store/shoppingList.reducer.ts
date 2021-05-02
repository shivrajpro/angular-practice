import { Ingredient } from "../../shared/Ingredient.model";
import * as ShoppingListActions from "./shoppingList.actions";


export const initialState = {
    ingredients: [
        new Ingredient("Apples", 5),
        new Ingredient("Tomatoes", 10)
    ]
}

export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
    switch (action.type) {
        case ShoppingListActions.ADD_INGREDIENT:
            return {
                ...state, // whatever is present in current state
                ingredients: [...state.ingredients, action.payload] //new data from new state
            };
        default:
            return state;
    }
}