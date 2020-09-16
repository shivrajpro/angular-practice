import { HttpHandler, HttpInterceptor, HttpRequest, HttpEventType } from "@angular/common/http";
import { tap } from 'rxjs/operators';

export class LoggingInterceptorService implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler){
        console.log("In",LoggingInterceptorService.name);
        console.log('req=', req);

        
        return next.handle(req).pipe(tap(event=>{
            console.log("evt=",event);

            if(event.type == HttpEventType.Response){
                console.log('res');
            }
            
        }));
    }
}