import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    if (request.method === 'POST' || request.method === 'PATCH' || request.method === 'DELETE') {
      // Ottieni il token dal localStorage o da un altro luogo in cui lo hai memorizzato
      const token = localStorage.getItem('token');

      // Clona la richiesta e aggiungi l'header di autorizzazione con il token
      const authorizedRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });

      return next.handle(authorizedRequest);
    }

    // Se la richiesta non è di tipo POST, PATCH o DELETE, passala direttamente al gestore HTTP
    return next.handle(request);
  }
}



