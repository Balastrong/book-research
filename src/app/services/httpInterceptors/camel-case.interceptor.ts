import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { isObject, objectKeysToCamelCase } from 'src/app/utils/dataUtils';

@Injectable()
export class CamelCaseInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      map((ev) => {
        if (ev instanceof HttpResponse && isObject(ev.body)) {
          return ev.clone({ body: objectKeysToCamelCase(ev.body) });
        } else {
          return ev;
        }
      }),
    );
  }
}
