import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiAuthService } from 'src/app/services/api-auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SignInComponent implements OnInit {
  loginform!: FormGroup
  isLogged = false;
  loginError: string | null = null;

  // @ViewChild('loginform') loginform!: NgForm   
  constructor(private router: Router, private apiAuthServices: ApiAuthService) { }


  //NG ON INIT PER REACTIVEFORM
  ngOnInit(): void {
    this.loginform = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    })
  }




  onSubmit() {
    if (this.loginform.valid) {
      const loginData = this.loginform.value;
      this.apiAuthServices.signin(loginData).subscribe(
        (response: any) => {
          // Registrazione avvenuta con successo, puoi gestire l'azione successiva qui
          this.isLogged = true
          this.loginform.reset();
          console.log('DATA ', loginData)


          // setTimeout(() => {
          //   this.router.navigate(['/characters']);
          // }, 3000);


        },
        (error: any) => {
          // Gestisci l'errore di registrazione qui
          if (error.error.message === 'Invalid Credential') {
            this.loginError = 'Unhautorized';
            this.isLogged = false;
          }
        }
      );
    }
  }


}