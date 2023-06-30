import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiAuthService } from 'src/app/services/api-auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registerForm! : FormGroup

  constructor(private apiAuthServices: ApiAuthService){}

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
          console.log('Registrazione avvenuta con successo:', response);
        },
        (error: any) => {
          // Gestisci l'errore di registrazione qui
          console.error('Errore durante la registrazione:', error);
        }
      );
    }

  }
}
