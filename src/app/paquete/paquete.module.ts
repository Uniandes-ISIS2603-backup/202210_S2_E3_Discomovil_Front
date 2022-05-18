import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaqueteListComponent } from './paquete-list/paquete-list.component';
import { PaqueteDetailComponent } from './paquete-detail/paquete-detail.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PaqueteListComponent, PaqueteDetailComponent],
  exports: [PaqueteListComponent ]
})
export class PaqueteModule { }
