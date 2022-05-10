import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaqueteListComponent } from './paquete-list/paquete-list.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PaqueteListComponent],
  exports: [PaqueteListComponent ]
})
export class PaqueteModule { }
