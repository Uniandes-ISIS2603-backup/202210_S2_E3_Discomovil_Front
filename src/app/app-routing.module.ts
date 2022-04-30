import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyNavbarComponent } from './navbar/MyNavbar/MyNavbar.component';
import { ProveedorListComponent } from './proveedor/proveedor-list/proveedor-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GrupoMusicalMainComponent } from './grupo-musical-module/grupo-musical-main/grupo-musical-main.component';

const routes: Routes = [
  { 'path': '', component: MyNavbarComponent},
  { 'path': 'proveedores', component: ProveedorListComponent},
  { 'path': 'gruposMusicales/:id', component: GrupoMusicalMainComponent},
  { 'path': 'gruposMusicales', component: MyNavbarComponent},
  //Este PAGE NOT FOUND debe ir al FINAL
  { 'path': '**', component: PageNotFoundComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
