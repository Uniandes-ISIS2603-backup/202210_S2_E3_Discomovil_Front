import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyNavbarComponent } from './my-navbar/my-navbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MyNavbarComponent],
  exports: [MyNavbarComponent]
})
export class NavbarModule { }
