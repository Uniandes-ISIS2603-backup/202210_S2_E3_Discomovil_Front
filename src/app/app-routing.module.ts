import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProveedorListComponent } from './proveedor/proveedor-list/proveedor-list.component';
import { ProveedorMainComponent } from './proveedor-main/proveedor-main/proveedor-main.component';
import { ProveedorFiltroGeneroComponent } from './proveedor-filtro-genero/proveedor-filtro-genero/proveedor-filtro-genero.component';

import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GrupoMusicalMainComponent } from './grupo-musical-module/grupo-musical-main/grupo-musical-main.component';
import { GrupoInfoCardComponent } from './grupo-musical-module/grupo-musical-main/grupo-info-card/grupo-info-card.component';
import { MusicoComponent } from './musico/musico.component';
import { ClienteComponent } from './cliente/cliente.component';
import { GrupoMusicalListComponent } from './grupo-musical-module/grupoMusical-list/grupoMusical-list.component';

const routes: Routes = [
  {path: 'clientes/:id', component: ClienteComponent},
  { path: ':id', component: GrupoInfoCardComponent, outlet: 'card-grupo'},
  { path: 'gruposMusicales/:id', component: GrupoMusicalMainComponent},
  { path: 'gruposMusicales', component: GrupoMusicalListComponent},
  {path: 'musicos/:id', component: MusicoComponent},
  { path: 'proveedores/:id', component: ProveedorMainComponent},
  { path: 'proveedores', component: ProveedorListComponent},
  { 'path': 'proveedores/filtros/genero/:genero', component: ProveedorFiltroGeneroComponent},
    //Este PAGE NOT FOUND debe ir al FINAL
  { path: '', component: HomePageComponent },
  { path: '**', component: PageNotFoundComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
