import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CharactersComponent } from './components/characters/characters.component';
import { SingleCharacterComponent } from './components/single-character/single-character.component';
import { SignupComponent } from './components/signup/signup.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'characters', component: CharactersComponent,  children: [
    { path: ':_id', component: SingleCharacterComponent }] },
    { path: 'signup', component: SignupComponent },
    {path: 'notfound', component: PageNotFoundComponent, pathMatch:'full'},
    {path:'**', redirectTo:'notfound'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
