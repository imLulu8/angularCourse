import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule, NgModel } from '@angular/forms';
import { HttpClientModule ,  HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatDialogRef } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleCharacterComponent } from './components/single-character/single-character.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FakeNavComponent } from './components/fake-nav/fake-nav.component';
import { ModalPostComponent } from './components/modal-post/modal-post.component';
import { UpdateButtonComponent } from './components/update-button/update-button.component';
import { ModalPatchComponent } from './components/modal-patch/modal-patch.component';
import { DeleteConfirmationComponent } from './components/delete-confirmation/delete-confirmation.component';
import {CustomAlertComponent} from './components/alert/alert.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { HomeModule } from './features/home/home.module';
import { SigninModule } from './features/signin/signin.module';
import { CharactersModule } from './features/characters/characters.module';
import { SignupModule } from './features/signup/signup.module';
import { ValidateModule } from './features/validate/validate.module';
import { NotfoundModule } from './features/notfound/notfound.module';
import { AngularModuleModule } from './shared/module/angular.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FakeNavComponent,
    SingleCharacterComponent,
    ModalPostComponent,
    UpdateButtonComponent,
    ModalPatchComponent,
    DeleteConfirmationComponent,
    CustomAlertComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    SigninModule,
    CharactersModule,
    SignupModule,
    ValidateModule,
    NotfoundModule,
    AngularModuleModule,
  ],
  providers: [
    NgModel,
    { provide: MatDialogRef, useValue: {}, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {} 
