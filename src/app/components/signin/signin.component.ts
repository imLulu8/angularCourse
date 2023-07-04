import { Component, OnInit } from '@angular/core';
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
  isLogged = false;
  loginError: string | null = null;

  constructor(private router: Router, private apiAuthService: ApiAuthService) { }

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
          console.log('Response:', response);
          const token = response.token;

          // Salva il token nel localStorage
          localStorage.setItem('token', token);
             
          // Salva l'utente nel localStorage
          const { name, surname, email } = response.user;
          const user = { name, surname, email };
          if (user){
          localStorage.setItem('user', JSON.stringify(user));
          }

          this.isLogged = true;
          this.loginForm.reset();

          // setTimeout(() => {
          //   this.router.navigate(['/characters']);
          // }, 3000);
        },
        (error: any) => {
          // Gestisci l'errore di login qui
          if (error.error.message === 'Invalid credentials') {
            this.loginError = 'Unauthorized';
            this.isLogged = false;
          }
        }
      );
    }
  }
}
