import { Injectable } from "@angular/core";
import { CanActivate, Router, UrlTree } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { map, take, tap } from "rxjs/operators";

import { AuthService } from "./auth.service";
import * as fromApp from "../store/app.reducer";

@Injectable({providedIn:'root'})
/**
 * Guards are used to protect out routes
 * this piece of code runs before rendering a particular component
 * which is configured in routing module
 */
export class AuthGuard implements CanActivate{

    constructor(private authService: AuthService,
        private router: Router,
        private store: Store<fromApp.AppState>) { }

    canActivate(): boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree> {

        return this.store.select('auth')
            .pipe(
                take(1),
                map(authState => {return authState.user}),
                map(user => {
                    const isAuth = !!user;

                    if (isAuth)
                        return true;

                    return this.router.createUrlTree(['/login']);
                })
                // tap(isAuth=>{
                //     if(!isAuth)
                //         return this.router.navigate(['/login']);
                // })
            );

        // return this.authService.userChanged
        // .pipe(
        //     take(1),
        //     map(user=>{
        //         const isAuth = !!user;

        //         if(isAuth)
        //             return true;

        //         return this.router.createUrlTree(['/login']);
        //     })
        //     // tap(isAuth=>{
        //     //     if(!isAuth)
        //     //         return this.router.navigate(['/login']);
        //     // })
        // );
    }
}