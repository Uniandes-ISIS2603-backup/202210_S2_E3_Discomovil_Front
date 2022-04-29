import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProveedorMainComponent } from './proveedor-main/proveedor-main.component';

import { NavbarModule } from '../navbar/navbar.module';

@NgModule({
  imports: [
    CommonModule,
    NavbarModule,
  ],
  declarations: [ProveedorMainComponent],
  exports: [ProveedorMainComponent]
})
export class ProveedorMainModule { }
