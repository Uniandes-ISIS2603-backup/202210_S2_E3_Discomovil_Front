import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarModule } from './navbar/navbar.module';
import { ProveedorModule } from './proveedor/proveedor.module';
import { ProveedorMainModule } from './proveedor-main/proveedor-main.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
      PageNotFoundComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NavbarModule,
    ProveedorModule,
    ProveedorMainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
