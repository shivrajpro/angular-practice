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
                            // console.log("user = ",user);
                            // console.log("!user = ",!user);
                        });
    }

    onSaveData(){
        this.dsService.storeRecipes();
    }

    onFetchData(){
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