import { Component } from "@angular/core";
import { NgForm } from '@angular/forms';
import { AuthService } from "./auth.service";

@Component({
    selector: 'app-auth',
    templateUrl:'./auth.component.html',
    styles:[`
        input.ng-invalid.ng-touched{
            border : 1px solid red;
        }
    `]
})
export class AuthComponent{
    inLoginMode:boolean = false;
    isLoading: boolean = true;

    constructor(private authService: AuthService){}

    onSwitchMode(){
        this.inLoginMode = !this.inLoginMode;
    }

    onSubmit(authForm: NgForm){
        console.log(authForm);
        this.isLoading = true;
        if(!authForm.valid)
        return;
        if(this.inLoginMode){
            
        }else{
            const email = authForm.value.email;
            const password =  authForm.value.password;
            
            this.authService.signup(email, password)
            .subscribe(responseData =>{
                    this.isLoading = false;
                    console.log(responseData);
                },error=>{
                    this.isLoading = false;
                    console.log(error);
                });

            authForm.reset();
        }
    }
}