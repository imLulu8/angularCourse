import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  
  ]
})
export class BaseModule { }
