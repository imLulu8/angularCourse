import { NgModule } from '@angular/core';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { AngularModuleModule } from 'src/app/shared/module/angular.module';


@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    SignupRoutingModule,
    AngularModuleModule
  ]
})
export class SignupModule { }
