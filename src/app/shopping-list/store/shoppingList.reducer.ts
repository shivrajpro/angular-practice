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

        case ShoppingListActions.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients: [...state.ingredients, ...action.payload]
            };

        case ShoppingListActions.UPDATE_INGREDIENT:
            const ingredient = state.ingredients[action.payload.index];

            const updatedIngredient = {
                ...ingredient,
                ...action.payload.inrgedient
            }

            const updatedIngredients = [...state.ingredients];
            updatedIngredients[action.payload.index] = updatedIngredient;

            return {
                ...state,
                ingredients: updatedIngredients
            };

        default:
            return state;
    }
}