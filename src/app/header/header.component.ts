import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Store } from "@ngrx/store";
import { Subscription } from 'rxjs';
import { map } from "rxjs/operators";
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../services/data-storage.service';
import * as fromApp from "../store/app.reducer";

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})

export class HeaderComponent implements OnInit, OnDestroy{
    isAuthencticated: boolean = false;
    userSub: Subscription;

    constructor(private dsService: DataStorageService,
                private authService: AuthService,
                private router: Router,
                private store: Store<fromApp.AppState>){}

    ngOnInit(){
        this.userSub =  this.store.select('auth')
                        .pipe(map(authState=>authState.user))
                        .subscribe(user=>{
                            // this.isAuthencticated = user ? true : false;
                            this.isAuthencticated = !!user;

                            if (!this.isAuthencticated) {
                                console.log('session expired');
                                this.router.navigateByUrl("/login");
                            }
                            // console.log("user = ",user);
                            // console.log("!user = ",!user);
                        });
    }

    onSaveData(){
        this.dsService.storeRecipes();
    }

    onFetchData(){
        // as we have added a resolver, we need to subscribe here
        this.dsService.fetchRecipes().subscribe();
    }

    onLogout(){
        this.authService.logout();
        this.router.navigate(['/login']);
    }

    ngOnDestroy(){
        this.userSub.unsubscribe();
    }
}