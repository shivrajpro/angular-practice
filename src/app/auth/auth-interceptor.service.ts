import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { exhaustMap, take, map } from "rxjs/operators";

import { AuthService } from "./auth.service";
import * as fromApp from "../store/app.reducer";

@Injectable({providedIn:'root'})
/**
 * interceptors are used to modify the requests before executing them
 * it can be adding a same paramter to all the APIs
 * it can be adding header parameters to all the outgoing requests
 * registered in providers array of the module with 3 params : provide, useClass and multi
 */
export class AuthInterceptorService implements HttpInterceptor {

    constructor(private authService: AuthService, private store:Store<fromApp.AppState>) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // throw new Error("Method not implemented.");

        return this.store.select('auth').
            pipe(
                take(1),
                map(authState=>{
                    return authState.user;
                }),
                exhaustMap(user => {
                    if(!user)
                        return next.handle(req);

                    const modifiedReq = req.clone({ params: new HttpParams().set("auth", user.token) });
                    return next.handle(modifiedReq);
                })
            );
        // return this.authService.userChanged.
        //     pipe(
        //         take(1),
        //         exhaustMap(user => {
        //             if(!user)
        //                 return next.handle(req);

        //             const modifiedReq = req.clone({ params: new HttpParams().set("auth", user.token) });
        //             return next.handle(modifiedReq);
        //         })
        //     );
    }

}