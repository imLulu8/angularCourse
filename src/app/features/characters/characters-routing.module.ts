import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters.component';
import { AuthGuard } from 'src/app/services/auth.guard';
import { SingleCharacterComponent } from 'src/app/components/single-character/single-character.component';

const routes: Routes = [{ path: '', component: CharactersComponent,canActivate: [AuthGuard], children: [
  { path: ':_id', component: SingleCharacterComponent }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
