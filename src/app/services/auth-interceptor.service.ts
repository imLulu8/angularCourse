import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log("🚀~ intercept ~ request:", request);
    
    // Controlla se l'utente è loggato (puoi personalizzare questa logica in base alla tua implementazione di autenticazione)
    const isLogged = localStorage.getItem('token') !== null;

    if (isLogged) {
      // Ottieni il token dal localStorage o da un altro luogo in cui lo hai memorizzato
      const token = localStorage.getItem('token');
      console.log('Logged???', isLogged);
      

      // Clona la richiesta e aggiungi l'header di autorizzazione con il token
      const authorizedRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });

      return next.handle(authorizedRequest);
    } else {
      // Se l'utente non è loggato, puoi gestire questa situazione come preferisci.
      // Ad esempio, puoi reindirizzare l'utente alla pagina di login o generare un errore.
      // In questo esempio, sto passando la richiesta direttamente al gestore HTTP senza alcuna modifica.
      return next.handle(request);
    }
  }
}
