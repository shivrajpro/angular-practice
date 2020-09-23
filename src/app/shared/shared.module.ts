import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { DropDownDirective } from "./drop-down.directive";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { AlertComponent } from "./alert/alert.component";
import { PlaceholderDirective } from "./placeholder/placeholder.directive";
import { LoggingService } from '../logging.service';

@NgModule({
    declarations: [
        DropDownDirective,
        LoadingSpinnerComponent,
        AlertComponent,
        PlaceholderDirective,
    ],
    imports:[CommonModule],
    exports:[
        DropDownDirective,
        LoadingSpinnerComponent,
        AlertComponent,
        PlaceholderDirective,
        CommonModule
    ],
    providers:[LoggingService]
})
export class SharedModule { }