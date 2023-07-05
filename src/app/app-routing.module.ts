import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/signin/signin.component';
import { CharactersComponent } from './components/characters/characters.component';
import { SingleCharacterComponent } from './components/single-character/single-character.component';
import { SignupComponent } from './components/signup/signup.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ValidateComponent } from './components/validate/validate.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'signin', component: SignInComponent },
  { path: 'characters', component: CharactersComponent, canActivate: [AuthGuard] ,children: [
    { path: ':_id', component: SingleCharacterComponent }] },
  { path: 'signup', component: SignupComponent },
  { path: 'validate/:tokenVerify', component: ValidateComponent },
  {path: 'notfound', component: PageNotFoundComponent, pathMatch:'full'},
  {path:'**', redirectTo:'notfound'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
