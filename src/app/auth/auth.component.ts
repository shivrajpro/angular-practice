import { Component } from "@angular/core";
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService, AuthResponseData } from "./auth.service";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styles: [`
        input.ng-invalid.ng-touched{
            border : 1px solid red;
        }
    `]
})
export class AuthComponent {
    inLoginMode: boolean = false;
    isLoading: boolean = false;
    error = null;

    constructor(private authService: AuthService) { }

    onSwitchMode() {
        this.inLoginMode = !this.inLoginMode;
    }

    onSubmit(authForm: NgForm) {
        // console.log(authForm);
        this.isLoading = true;

        const email = authForm.value.email;
        const password = authForm.value.password;

        let authObs: Observable<AuthResponseData>;

        if (!authForm.valid)
            return;
        if (this.inLoginMode) {
            authObs = this.authService.login(email, password);
        } else {
            authObs = this.authService.signup(email, password)
            authForm.reset();
        }

        authObs.subscribe(responseData => {
            this.isLoading = false;
            console.log(responseData);
        }, errorMsg => {
            this.isLoading = false;
            this.error = errorMsg;
            console.log(errorMsg);
        });
    }
}