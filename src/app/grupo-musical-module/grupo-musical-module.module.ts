import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from '../navbar/navbar.module';
import { GrupoMusicalMainComponent } from './grupo-musical-main/grupo-musical-main.component';
import { GrupoInfoCardComponent } from './grupo-musical-main/grupo-info-card/grupo-info-card.component';
import { AppRoutingModule } from '../app-routing.module';
@NgModule({
  imports: [
    CommonModule,
    NavbarModule,
    AppRoutingModule
  ],
  declarations: [GrupoMusicalMainComponent,GrupoInfoCardComponent],
  exports: [GrupoMusicalMainComponent,GrupoInfoCardComponent]
})
export class GrupoMusicalModuleModule { }
