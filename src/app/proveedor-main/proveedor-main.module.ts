import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProveedorMainComponent } from './proveedor-main/proveedor-main.component';
import { ComentarioModule } from '../comentario/comentario.module';

@NgModule({
  imports: [
    CommonModule,
    ComentarioModule],
  declarations: [ProveedorMainComponent],
  exports: [ProveedorMainComponent],

})
export class ProveedorMainModule { }
