import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarModule } from './navbar/navbar.module';
import { FooterModule } from './footer/footer.module';
import { ProveedorModule } from './proveedor/proveedor.module';
import { ProveedorMainModule } from './proveedor-main/proveedor-main.module';
import { ProveedorFiltroGeneroModule } from './proveedor-filtro-genero/proveedor-filtro-genero.module';
import { ZonaModule } from './zona/zona.module';

import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GrupoMusicalModuleModule } from './grupo-musical-module/grupo-musical-module.module';

import { PaqueteModule } from './paquete/paquete.module';
import { ComentarioModule } from './comentario/comentario.module';
import { ClienteModule } from './cliente/cliente.module';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NavbarModule,
    ProveedorModule,
    GrupoMusicalModuleModule,
    FooterModule,
    ProveedorModule,
    ProveedorMainModule,

    PaqueteModule,
    ComentarioModule,

    ProveedorFiltroGeneroModule,
    ZonaModule,
    ClienteModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
