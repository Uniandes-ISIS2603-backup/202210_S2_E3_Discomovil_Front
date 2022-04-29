import { Component, OnInit } from '@angular/core';
import { Proveedor } from '../../proveedor/proveedor';
import { ProveedorMainService } from '../proveedor-main.service';

@Component({
  selector: 'app-proveedor-main',
  templateUrl: './proveedor-main.component.html',
  styleUrls: ['./proveedor-main.component.css']
})
export class ProveedorMainComponent implements OnInit {
  // ---------
  // Atributos
  // ---------

  // proveedores array
  proveedores: Array<Proveedor> = [];

  constructor(public proveeedorMainService: ProveedorMainService) { }

  getProveedores() {
    this.proveeedorMainService.getProveedores().subscribe((proveedores: Proveedor[]) => {
      this.proveedores = proveedores;
    });
  }

  ngOnInit() {
    this.getProveedores();
  }
}
