import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { SignInComponent } from './components/signin/signin.component';
// import { CharactersComponent } from './components/characters/characters.component';
// import { SingleCharacterComponent } from './components/single-character/single-character.component';
// import { SignupComponent } from './components/signup/signup.component';
// import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
// import { ValidateComponent } from './components/validate/validate.component';
// import { AuthGuard } from './services/auth.guard';
// import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
  { path: 'signin', loadChildren: () => import('./features/signin/signin.module').then(m => m.SigninModule) },
  { path: 'characters', loadChildren: () => import('./features/characters/characters.module').then(m => m.CharactersModule) },
  { path: 'signup', loadChildren: () => import('./features/signup/signup.module').then(m => m.SignupModule) },
  { path: 'validate/:tokenVerify', loadChildren: () => import('./features/validate/validate.module').then(m => m.ValidateModule) },
  { path: 'notfound', loadChildren: () => import('./features/notfound/notfound.module').then(m => m.NotfoundModule) },
  {path:'**', redirectTo:'notfound'},
];


//VECCHI PATH
  // { path: 'home', component: HomeComponent },
  // { path: 'signin', component: SignInComponent },
  // { path: 'characters', component: CharactersComponent, canActivate: [AuthGuard] ,children: [
  //   { path: ':_id', component: SingleCharacterComponent }] },
  // { path: 'signup', component: SignupComponent },
  // { path: 'validate/:tokenVerify', component: ValidateComponent },
  // {path: 'notfound', component: PageNotFoundComponent, pathMatch:'full'},

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
