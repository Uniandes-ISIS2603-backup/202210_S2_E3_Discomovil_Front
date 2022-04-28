import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarModule } from './navbar/navbar.module';
import { ProveedorModule } from './proveedor/proveedor.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [	
    AppComponent,
      PageNotFoundComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    ProveedorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
