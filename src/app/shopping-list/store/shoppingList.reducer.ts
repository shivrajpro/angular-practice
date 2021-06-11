import { Ingredient } from "../../shared/Ingredient.model";
import * as ShoppingListActions from "./shoppingList.actions";

export interface State {
    ingredients: Ingredient[],
    editedIngredient: Ingredient,
    editedIngredientIndex: number
}

// export interface AppState {
//     shoppingList: State
// }

const initialState: State = {
    ingredients: [
        new Ingredient("Apples", 5),
        new Ingredient("Tomatoes", 10)
    ],
    editedIngredient: null,
    editedIngredientIndex: -1
}

export function shoppingListReducer(
    state: State = initialState, 
    action: ShoppingListActions.ShoppingListActions): State {

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
            const ingredient = state.ingredients[state.editedIngredientIndex];

            const updatedIngredient = {
                ...ingredient,
                ...action.payload
            }

            const updatedIngredients = [...state.ingredients];
            updatedIngredients[state.editedIngredientIndex] = updatedIngredient;

            return {
                ...state,
                ingredients: updatedIngredients,
                editedIngredientIndex: -1,
                editedIngredient: null
            };

        case ShoppingListActions.START_EDIT:
            return {
                ...state,
                editedIngredient: { ...state.ingredients[action.payload] },
                editedIngredientIndex: action.payload
            };


        case ShoppingListActions.STOP_EDIT:
            return {
                ...state,
                editedIngredient: null,
                editedIngredientIndex: -1
            };

        case ShoppingListActions.DELETE_INGREDIENT:
            return {
                ...state,
                ingredients: state.ingredients.filter((ing, ingIndex) => ingIndex != state.editedIngredientIndex),
                editedIngredientIndex: -1,
                editedIngredient: null
            };

        default:
            return state;
    }
}