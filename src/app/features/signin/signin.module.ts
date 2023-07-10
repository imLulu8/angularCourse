import { NgModule } from '@angular/core';
import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from './signin.component';
import { BaseModule } from 'src/app/shared/module/base.module';


@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    SigninRoutingModule,
    BaseModule
  ]
})
export class SigninModule { }
