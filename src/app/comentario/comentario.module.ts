import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CardComentarioComponent } from './card-comentario/card-comentario.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule
  ],
  declarations: [CardComentarioComponent],
  exports: [CardComentarioComponent]
})
export class ComentarioModule { }
