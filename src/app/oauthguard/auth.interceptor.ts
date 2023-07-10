import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { WebPortalService } from "../webportal/web-portal.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    
    constructor(private service: WebPortalService){

    }
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        let newRequest = req;
        let token = this.service.getToken();

        console.log("Interceptor", token);

        if(token != null) {
            newRequest = newRequest.clone({setHeaders: {Authorization: `Bearer ${token}`}});
        }

        return next.handle(newRequest);
    }
    
}