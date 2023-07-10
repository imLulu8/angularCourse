import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApiAuthService } from '../../services/api-auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';


@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.scss']
})
export class ValidateComponent implements OnInit {
  validateError: string | null = null;
  validateForm!: FormGroup
  validateSuccess = false;

  constructor( private route: ActivatedRoute,
    private authService: ApiAuthService, 
    private router: Router,
    private sharedService : SharedService   ) { }

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
          this.openAlert();
          // Reset del form dopo validateSuccess e dopo aver aperto la modal
          this.validateForm.reset;

          setTimeout(() => {
            this.closeAlert();
            this.router.navigate(['/signin']);
          }, 3000);
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

  openAlert(): void {
    this.sharedService.handleAlert.next({
      message: 'Validation successfull. You are about to be redirected to login..',
      isVisible: true
    })
  }

  closeAlert():void {
    this.sharedService.handleAlert.next({
      isVisible: false
    })

  }

  
  
  
}
