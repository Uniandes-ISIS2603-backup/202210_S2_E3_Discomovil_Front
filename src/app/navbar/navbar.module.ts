import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyNavbarComponent } from './my-navbar/my-navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [MyNavbarComponent],
  exports: [MyNavbarComponent]
})
export class NavbarModule { }
