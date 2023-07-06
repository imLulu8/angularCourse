import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ApiAuthService } from 'src/app/services/api-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  
  
  constructor(private authService: ApiAuthService, private router: Router){}
  isLogged = this.authService.isLogged;

  logout() {
    this.authService.logout();
    this.router.navigate(['/signin']);
  }

  ngOnInit(): void {
    
  }

}
