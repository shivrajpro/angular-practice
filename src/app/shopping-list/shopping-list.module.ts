import { NgModule } from "@angular/core";
import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { LoggingService } from '../services/logging.service';

@NgModule({
    declarations:[ShoppingListComponent, ShoppingEditComponent],
    imports:[
        FormsModule,
        SharedModule,
        RouterModule.forChild([
            {
                path: '',
                component: ShoppingListComponent
            }
        ])       
    ],
    // inject loggingService here and in core.module
    // shoppingList module will have separate copy and app.module will have a separate
    // providers:[LoggingService]

})
export class ShoppingListModule{

}