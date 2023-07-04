import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiAuthService } from 'src/app/services/api-auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SignInComponent implements OnInit {
  loginForm!: FormGroup;
  loginError: string | null = null;

  constructor(private router: Router, private apiAuthService: ApiAuthService) { }
  isLogged = this.apiAuthService.isLogged.next(false);


  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      this.apiAuthService.signin(loginData).subscribe(
        (response: any) => {
          const token = response.token;

          // Salva il token nel localStorage
          localStorage.setItem('token', token);
             
          // Salva l'utente nel localStorage
          const { name, surname, email } = response.user;
          const user = { name, surname, email };
          if (user){
          localStorage.setItem('user', JSON.stringify(user));
          }

          this.isLogged = this.apiAuthService.isLogged.next(true)
          this.loginForm.reset();
          this.router.navigate(['/characters']);
        },
        (error: any) => {
          // Gestisci l'errore di login qui
          if (error.error.message === 'Invalid credentials') {
            this.loginError = 'Invalid credentials';
            this.isLogged = this.apiAuthService.isLogged.next(false)
          }
        }
      );
    }
  }



  
}
