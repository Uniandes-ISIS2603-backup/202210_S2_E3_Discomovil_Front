import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente.component';
import { BrowserModule } from '@angular/platform-browser';
import { ComentarioModule } from '../comentario/comentario.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ComentarioModule
  ],
  declarations: [ClienteComponent],
  exports:[ClienteComponent]
})
export class ClienteModule { }
