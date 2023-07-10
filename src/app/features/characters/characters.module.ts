import { NgModule } from '@angular/core';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { AngularModuleModule } from 'src/app/shared/module/angular.module';
import { AddButtonComponent } from 'src/app/components/add-button/add-button.component';


@NgModule({
  declarations: [
    CharactersComponent,
    AddButtonComponent,
  ],
  imports: [
    CharactersRoutingModule,
    AngularModuleModule,
  ]
})
export class CharactersModule { }
