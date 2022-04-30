import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProveedorListComponent } from './proveedor/proveedor-list/proveedor-list.component';
import { ProveedorMainComponent } from './proveedor-main/proveedor-main/proveedor-main.component';

import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { 'path': '', component: HomePageComponent },
  { 'path': 'proveedores', component: ProveedorListComponent},
  { 'path': 'proveedores/:id', component: ProveedorMainComponent},
  { 'path': '**', component: PageNotFoundComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
