import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from '../navbar/navbar.module';
import { GrupoMusicalMainComponent } from './grupo-musical-main/grupo-musical-main.component';
import { GrupoInfoCardComponent } from './grupo-musical-main/grupo-info-card/grupo-info-card.component';
import { AppRoutingModule } from '../app-routing.module';
import { GrupoMusicalListComponent } from './grupoMusical-list/grupoMusical-list.component';
@NgModule({
  imports: [
    CommonModule,
    NavbarModule,
    AppRoutingModule
  ],
  declarations: [GrupoMusicalMainComponent,GrupoInfoCardComponent,GrupoMusicalListComponent],
  exports: [GrupoMusicalMainComponent,GrupoInfoCardComponent,GrupoMusicalListComponent]
})
export class GrupoMusicalModuleModule { }
