import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { DropDownDirective } from "./drop-down.directive";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { AlertComponent } from "./alert/alert.component";
import { PlaceholderDirective } from "./placeholder/placeholder.directive";
import { LoggingService } from '../services/logging.service';

@NgModule({
    //an element can be a part of declarations array of ONLY ONE component
    //for e.g. here we cannot DropDownDirective in declarations of any other module
    //if we want to use it then add SharedModule to the import of target module
    declarations: [
        DropDownDirective,
        LoadingSpinnerComponent,
        AlertComponent,
        PlaceholderDirective,
    ],
    imports:[CommonModule],
    // since we are using below features outside this module, we need to export them
    exports:[
        DropDownDirective,
        LoadingSpinnerComponent,
        AlertComponent,
        PlaceholderDirective,
        CommonModule //need this for ngIf, ngFor to work, as we can use BrowserModule only once
    ],
    providers:[LoggingService]
})
export class SharedModule { }