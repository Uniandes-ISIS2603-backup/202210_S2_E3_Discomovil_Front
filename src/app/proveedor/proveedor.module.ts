import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProveedorListComponent } from './proveedor-list/proveedor-list.component';

import { NavbarModule } from '../navbar/navbar.module';
import { ProveedorDetailComponent } from './proveedor-detail/proveedor-detail.component';
import { ComentarioModule } from '../comentario/comentario.module';
import { ProveedorFiltroCalificacionComponent } from './proveedor-filtro-calificacion/proveedor-filtro-calificacion.component';
import { RouterModule } from '@angular/router';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RatingStarsComponent } from './proveedor-filtro-calificacion/rating-stars/rating-stars.component';

@NgModule({
  imports: [
    CommonModule,
    NavbarModule,
    ComentarioModule,
    RouterModule,
    FontAwesomeModule
  ],
  declarations: [
    ProveedorListComponent,
    ProveedorDetailComponent,
    ProveedorFiltroCalificacionComponent,
    RatingStarsComponent
  ],
  exports:[ProveedorListComponent]
})
export class ProveedorModule {}
