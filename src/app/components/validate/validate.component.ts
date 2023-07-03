import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApiAuthService } from '../../services/api-auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.scss']
})
export class ValidateComponent implements OnInit {
  validateError: string | null = null;
  validateForm!: FormGroup
  validateSuccess = false;

  constructor( private route: ActivatedRoute,private authService: ApiAuthService, private router: Router   ) { }

  ngOnInit(): void {
    const verify = this.route.snapshot.paramMap.get('tokenVerify');
    this.validateForm = new FormGroup({
      tokenVerify: new FormControl(verify, Validators.required)
    });
  }
  

  onSubmit(): void {
    if (this.validateForm.valid) {
      const tokenVerify = this.validateForm.get('tokenVerify')?.value;
      this.authService.validateUser(tokenVerify).subscribe(
        (response: any) => {
          // Validazione avvenuta con successo
          this.validateSuccess = true;
          // Effettua l'azione desiderata, come reindirizzamento alla home
          this.validateForm.reset;

          setTimeout(() => {
            this.router.navigate(['/']);
          }, 5000);
        },
        
        (error: any) => {
          // Gestisci l'errore di registrazione qui
          if (error.error.message === 'token not valid') {
            this.validateSuccess = false;
            this.validateError = 'Token not valid.';
          }
        }
      );
    }
  }
  
  
  
}
