import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFooterComponent } from './my-footer/my-footer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MyFooterComponent],
  exports: [MyFooterComponent],
})
export class FooterModule {}
