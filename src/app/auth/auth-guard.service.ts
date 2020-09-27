import { Injectable } from "@angular/core";
import { CanActivate, Router, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { map, take, tap } from "rxjs/operators";

import { AuthService } from "./auth.service";

@Injectable({providedIn:'root'})
export class AuthGuard implements CanActivate{

    constructor(private authService: AuthService,
                private router: Router){}

    canActivate(): boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree>{

        return this.authService.userChanged
        .pipe(
            take(1),
            map(user=>{
                const isAuth = !!user;

                if(isAuth)
                    return true;
                
                return this.router.createUrlTree(['/login']);
            })
            // tap(isAuth=>{
            //     if(!isAuth)
            //         return this.router.navigate(['/login']);
            // })
        );
    }
}