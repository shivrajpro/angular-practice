import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { AuthComponent } from "./auth.component";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [AuthComponent],
    imports: [
        SharedModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: 'login',
                component: AuthComponent
            }
    ])]
})
export class AuthModule { }