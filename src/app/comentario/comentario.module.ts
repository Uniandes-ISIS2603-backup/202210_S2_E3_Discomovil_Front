import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComentarioComponent } from './comentario.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule
  ],
  declarations: [ComentarioComponent]
})
export class ComentarioModule { }
