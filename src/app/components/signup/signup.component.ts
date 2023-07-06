import { Component, OnInit  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiAuthService } from 'src/app/services/api-auth.service';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registrationSuccess = false;
  registerForm! : FormGroup
  registrationError: string | null = null;
  hide: boolean = true;

  
  constructor( private apiAuthServices: ApiAuthService,  
    private router: Router, 
    private sharedService : SharedService,
    ){}

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
          this.openAlert();
          this.registerForm.reset();

          setTimeout(() => {
            this.closeAlert();
            this.router.navigate([`validate/${response.verify}`]);
          }, 2000);

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

  openAlert(): void {
    this.sharedService.handleAlert.next({
      message: 'Sign up success, verify your account..',
      isVisible: true,
      style: 'primary'
    })
}

  closeAlert():void {
    this.sharedService.handleAlert.next({
      isVisible: false
    })
  }

}
