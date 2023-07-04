import { Component, OnInit } from '@angular/core';
import { ApiAuthService } from 'src/app/services/api-auth.service';
import { AuthInterceptorService } from 'src/app/services/auth-interceptor.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLogged = false;

  constructor(private authService: ApiAuthService){

  this.isLogged = localStorage.getItem('token') !== null;

  }
  logout() {
    this.authService.logout();
    this.isLogged = false;
  }

  ngOnInit(): void {
    
  }

}
