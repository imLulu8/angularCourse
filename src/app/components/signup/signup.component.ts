import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiAuthService } from 'src/app/services/api-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  registrationSuccess = false;
  registerForm! : FormGroup
  registrationError: string | null = null;


  hidePassword: boolean = true;

  togglePasswordVisibility() {
  this.hidePassword = !this.hidePassword;
  }
  
  constructor(private apiAuthServices: ApiAuthService,  private router: Router){}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      surname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    })

  }

  onSubmit() {
    if (this.registerForm.valid) {
      const registerData = this.registerForm.value;
      this.apiAuthServices.signup(registerData).subscribe(
        (response: any) => {
          // Registrazione avvenuta con successo, puoi gestire l'azione successiva qui
          this.registrationSuccess = true
          this.registerForm.reset();

          setTimeout(() => {
            this.router.navigate([`validate/${response.verify}`]);
          }, 3000);
          
        },
        (error: any) => {
          // Gestisci l'errore di registrazione qui
          if (error.error.message === 'Email is just present') {
            this.registrationError = 'Account already exist.';
            this.registrationSuccess = false;
          }
        }
      );
    }

  }
}
