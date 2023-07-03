import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homeform!: FormGroup
  isLogged = false;
  // @ViewChild('homeForm') homeForm!: NgForm   
  constructor( private router: Router) {}


  //NG ON INIT PER REACTIVEFORM
  ngOnInit(): void {
    this.homeform = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    })
  }




  //ON SUBMIT PER REACTIVE FORM
  onSubmit(){
    console.log(this.homeform)
    this.isLogged = true;

    setTimeout(() => {
      this.router.navigate(['/characters']);
    }, 3000);
  }

}
