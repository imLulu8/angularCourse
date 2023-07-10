import { NgModule } from '@angular/core';

import { ValidateRoutingModule } from './validate-routing.module';
import { ValidateComponent } from './validate.component';
import { AngularModuleModule } from 'src/app/shared/module/angular.module';


@NgModule({
  declarations: [
    ValidateComponent
  ],
  imports: [
    ValidateRoutingModule,
    AngularModuleModule,
  ]
})
export class ValidateModule { }
