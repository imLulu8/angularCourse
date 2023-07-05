import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, NgModel } from '@angular/forms';
import { HttpClientModule ,  HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CharactersComponent } from './components/characters/characters.component';
import { SingleCharacterComponent } from './components/single-character/single-character.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FakeNavComponent } from './components/fake-nav/fake-nav.component';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { ModalPostComponent } from './components/modal-post/modal-post.component';
import { UpdateButtonComponent } from './components/update-button/update-button.component';
import { ModalPatchComponent } from './components/modal-patch/modal-patch.component';
import { SignupComponent } from './components/signup/signup.component';
import { SignInComponent}  from './components/signin/signin.component'
import { DeleteConfirmationComponent } from './components/delete-confirmation/delete-confirmation.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {CustomAlertComponent} from './components/alert/alert.component';
import { ValidateComponent } from './components/validate/validate.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignInComponent,
    CharactersComponent,
    SingleCharacterComponent,
    FakeNavComponent,
    AddButtonComponent,
    ModalPostComponent,
    UpdateButtonComponent,
    ModalPatchComponent,
    SignupComponent,
    DeleteConfirmationComponent,
    PageNotFoundComponent,
    CustomAlertComponent,
    ValidateComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatSidenavModule,
    MatDialogModule,
    MatIconModule,
  ],
  providers: [
    NgModel,
    { provide: MatDialogRef, useValue: {}, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {} 
