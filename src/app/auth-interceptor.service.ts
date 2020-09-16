import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class AuthInterceptorService implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("In",AuthInterceptorService.name);
        
        const modifiedReq = req.clone({headers: req.headers.append("Auth","acDWqwdxaAVqwDQXBTHadEFE")});
        
        console.log("req=",modifiedReq);

        return next.handle(modifiedReq);
    }

}