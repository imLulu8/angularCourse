import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ApiAuthService } from './api-auth.service';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authInterceptor: ApiAuthService, 
    private router: Router,
    private sharedService: SharedService) {}

  canActivate(): boolean {
    if (this.authInterceptor.isLogged.getValue()) {
      return true;
    } else {
      this.openAlert();
      this.router.navigate(['/signin']);

      setTimeout(() => {
        this.closeAlert();
      }, 2000);

      return false;

    }
  }

  openAlert(): void {
    this.sharedService.handleAlert.next({
      message: 'To view the characters, please login...',
      isVisible: true
    })
  }

  closeAlert():void {
    this.sharedService.handleAlert.next({
      isVisible: false
    })
  }

}
