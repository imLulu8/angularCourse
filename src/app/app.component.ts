import { Component, OnInit } from '@angular/core';
import { ApiAuthService } from 'src/app/services/api-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private apiAuthService: ApiAuthService) { }

  ngOnInit(): void {
    this.apiAuthService.autoLogin();
  }
}
