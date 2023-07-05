import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthInterceptorService } from './auth-interceptor.service';
import { ApiAuthService } from './api-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authInterceptor: ApiAuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authInterceptor.isLogged.getValue()) {
      return true;
    } else {
      this.router.navigate(['/signin']);
      return false;
    }
  }
}


