import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProveedorListComponent } from './proveedor-list/proveedor-list.component';

import { NavbarModule } from '../navbar/navbar.module';
import { ProveedorDetailComponent } from './proveedor-detail/proveedor-detail.component';

@NgModule({
  imports: [
    CommonModule,
    NavbarModule,
  ],
  declarations: [ProveedorListComponent,ProveedorDetailComponent],
  exports:[ProveedorListComponent]
})
export class ProveedorModule { }
