import { NgModule } from '@angular/core';

import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from './signin.component';
import { AngularModuleModule } from 'src/app/shared/module/angular.module';


@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    SigninRoutingModule,
    AngularModuleModule
  ]
})
export class SigninModule { }
