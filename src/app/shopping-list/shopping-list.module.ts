import { NgModule } from "@angular/core";
import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations:[ShoppingListComponent, ShoppingEditComponent],
    imports:[
        RouterModule.forChild([
            {
                path: 'shopping-list',
                component: ShoppingListComponent
            }
        ])       
    ]

})
export class ShoppingListModule{

}