import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homeform!: FormGroup
  // @ViewChild('homeForm') homeForm!: NgForm   
  constructor() {}


  //NG ON INIT PER REACTIVEFORM
  ngOnInit(): void {
    this.homeform = new FormGroup({
      name: new FormControl(null, Validators.required),
      surname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    })
  }




  //ON SUBMIT PER REACTIVE FORM
  onSubmit(){
    console.log(this.homeform)
  }

}
