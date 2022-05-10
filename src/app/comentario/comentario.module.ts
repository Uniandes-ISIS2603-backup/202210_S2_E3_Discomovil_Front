import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comnentario_listComponent } from './comnentario_list/comnentario_list.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Comnentario_listComponent],
  exports: [Comnentario_listComponent]
})
export class ComentarioModule { }
