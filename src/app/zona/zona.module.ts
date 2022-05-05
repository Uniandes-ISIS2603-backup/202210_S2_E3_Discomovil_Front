import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZonaListComponent } from './zona-list/zona-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ZonaListComponent],
  exports : [ZonaListComponent]
})
export class ZonaModule { }
