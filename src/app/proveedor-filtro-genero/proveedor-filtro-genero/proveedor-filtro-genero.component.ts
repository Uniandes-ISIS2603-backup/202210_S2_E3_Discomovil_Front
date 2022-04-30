import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Proveedor } from 'src/app/proveedor/proveedor';
import { ProveedorFiltroGeneroService } from '../proveedor-filtro-genero.service';

@Component({
  selector: 'app-proveedor-filtro-genero',
  templateUrl: './proveedor-filtro-genero.component.html',
  styleUrls: ['./proveedor-filtro-genero.component.css'],
})
export class ProveedorFiltroGeneroComponent implements OnInit {
  // ---------
  // Atributos
  // ---------

  // proveedores array
  proveedores: Array<Proveedor> = [];

  // filtro
  genero: string;

  constructor(
    private route: ActivatedRoute,
    public proveedorFiltroGeneroService: ProveedorFiltroGeneroService
  ) {
    this.genero = this.route.snapshot.paramMap.get('genero')!;
  }

  getProveedores() {
    this.proveedorFiltroGeneroService
      .getProveedores()
      .subscribe((proveedores: Proveedor[]) => {
        this.proveedores = proveedores;
      });
  }

  ngOnInit() {
    this.getProveedores();
  }
}
