import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, NgModel } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { CharactersComponent } from './components/characters/characters.component';
import { SingleCharacterComponent } from './components/single-character/single-character.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FakeNavComponent } from './components/fake-nav/fake-nav.component';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { ModalPostComponent } from './components/modal-post/modal-post.component';
import { UpdateButtonComponent } from './components/update-button/update-button.component';
import { ModalPatchComponent } from './components/modal-patch/modal-patch.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CharactersComponent,
    SingleCharacterComponent,
    FakeNavComponent,
    AddButtonComponent,
    ModalPostComponent,
    UpdateButtonComponent,
    ModalPatchComponent,
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
  ],
  providers: [
    NgModel,
    { provide: MatDialogRef, useValue: {} }, // Aggiungi questa riga per fornire MatDialogRef
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
