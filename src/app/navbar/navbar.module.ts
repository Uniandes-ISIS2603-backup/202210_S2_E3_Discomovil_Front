import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyNavbarComponent } from './MyNavbar/MyNavbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MyNavbarComponent],
  exports: [MyNavbarComponent]
})
export class NavbarModule { }
