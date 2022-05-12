import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZonaListComponent } from './zona-list/zona-list.component';
import { ZonaDetailComponent } from './zona-detail/zona-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ZonaListComponent, ZonaDetailComponent],
  exports : [ZonaListComponent]
})
export class ZonaModule { }
