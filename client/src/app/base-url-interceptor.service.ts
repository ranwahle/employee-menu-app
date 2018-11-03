import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

const baseUrl = '/api/'
@Injectable({
  providedIn: 'root'
})
export class BaseUrlInterceptorService implements HttpInterceptor {


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      if (!req.url.toLowerCase().startsWith(baseUrl)) {
        const request = req.clone({url: `${baseUrl}${req.url}`});

        return next.handle(request)
      }
      return next.handle(req);
  }


}
