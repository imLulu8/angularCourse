import { NgModule } from '@angular/core';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { BaseModule } from 'src/app/shared/module/base.module';
import { MaterialModule } from 'src/app/shared/module/material.module';


@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    SignupRoutingModule,
    BaseModule,
    MaterialModule,
  ]
})
export class SignupModule { }
