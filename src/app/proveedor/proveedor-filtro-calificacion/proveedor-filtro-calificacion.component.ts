import { Component, OnInit } from '@angular/core';
import { Proveedor } from '../proveedor';
import { ProveedorService } from '../proveedor.service';

@Component({
  selector: 'app-proveedor-filtro-calificacion',
  templateUrl: './proveedor-filtro-calificacion.component.html',
  styleUrls: ['./proveedor-filtro-calificacion.component.css']
})
export class ProveedorFiltroCalificacionComponent implements OnInit {

  proveedores: Proveedor[] = [];

  constructor(public proveedorService : ProveedorService) {

  }

  getProveedoresByRating(rating: number) : void {
    this.proveedores = [];
    this.proveedorService.getProveedores().subscribe((proveedores: Proveedor[]) => {
      for(let proveedor of proveedores) {
        if (parseFloat(proveedor.calificacion) >= rating) {
          this.proveedores.push(proveedor)
        }
      }
    })
  }



  ngOnInit() {
  }

}
