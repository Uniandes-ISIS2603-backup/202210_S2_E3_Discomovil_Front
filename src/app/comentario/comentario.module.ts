import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { BrowserModule } from '@angular/platform-browser';
import { CardComentarioComponent } from './card-comentario/card-comentario.component';
import { Comnentario_listComponent } from './comnentario_list/comnentario_list.component';
import { ComentarioDetailComponent } from './comentario-detail/comentario-detail.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule
  ],
  declarations: [CardComentarioComponent, Comnentario_listComponent, ComentarioDetailComponent],
  exports: [CardComentarioComponent,Comnentario_listComponent]

})
export class ComentarioModule { }
