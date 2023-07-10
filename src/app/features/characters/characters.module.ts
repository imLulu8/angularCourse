import { NgModule } from '@angular/core';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { BaseModule } from 'src/app/shared/module/base.module';
import { AddButtonComponent } from 'src/app/components/add-button/add-button.component';
import { MaterialModule } from 'src/app/shared/module/material.module';


@NgModule({
  declarations: [
    CharactersComponent,
    AddButtonComponent,
  ],
  imports: [
    CharactersRoutingModule,
    BaseModule,
    MaterialModule,
  ]
})
export class CharactersModule { }
