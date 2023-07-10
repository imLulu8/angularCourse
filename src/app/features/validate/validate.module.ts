import { NgModule } from '@angular/core';

import { ValidateRoutingModule } from './validate-routing.module';
import { ValidateComponent } from './validate.component';
import { BaseModule } from 'src/app/shared/module/base.module';


@NgModule({
  declarations: [
    ValidateComponent
  ],
  imports: [
    ValidateRoutingModule,
    BaseModule,
  ]
})
export class ValidateModule { }
