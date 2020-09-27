import { Component, ComponentFactoryResolver, OnDestroy, ViewChild } from "@angular/core";
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthResponseData, AuthService } from "./auth.service";
import { AlertComponent } from "../shared/alert/alert.component";
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styles: [`
        input.ng-invalid.ng-touched{
            border : 1px solid red;
        }
    `]
})
export class AuthComponent implements OnDestroy {
    inLoginMode: boolean = true;
    isLoading: boolean = false;
    error = null;

    @ViewChild(PlaceholderDirective, {static: false}) alertHost: PlaceholderDirective;

    closeSub: Subscription;

    constructor(private authService: AuthService,
                private router: Router,
                private cmpFactResolver: ComponentFactoryResolver) {}

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
            // console.log(responseData);

            this.router.navigate(['/recipes']);
        }, errorMsg => {
            this.isLoading = false;
            this.error = errorMsg;
            this.showErrorAlert(errorMsg);
            console.log(errorMsg);
        });
    }

    onCloseError(){
        this.error = null;
    }

    showErrorAlert(message: string){
        const alertCmpFactory = this.cmpFactResolver.resolveComponentFactory(AlertComponent);

        const hostViewContainerRef =  this.alertHost.viewContainerRef;

        hostViewContainerRef.clear();

        const containerRef = hostViewContainerRef.createComponent(alertCmpFactory);

        containerRef.instance.message = message;

        this.closeSub = containerRef.instance.close.subscribe(()=>{
            this.closeSub.unsubscribe();
            hostViewContainerRef.clear();
        });
    }

    ngOnDestroy(){
        if(this.closeSub)
            this.closeSub.unsubscribe();
    }
}