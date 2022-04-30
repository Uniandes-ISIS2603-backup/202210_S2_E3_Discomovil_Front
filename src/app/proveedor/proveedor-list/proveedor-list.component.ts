import { Component, OnInit } from '@angular/core';
import { Proveedor } from '../proveedor';
import { ProveedorService } from '../proveedor.service';

@Component({
  selector: 'app-proveedor-list',
  templateUrl: './proveedor-list.component.html',
  styleUrls: ['./proveedor-list.component.css']
})
export class ProveedorListComponent implements OnInit {
   proveedores: Array<Proveedor> = [];

  constructor(public proveedorService: ProveedorService) { }
  getProveedores() {
    this.proveedorService.getProveedores().subscribe((proveedores: Proveedor[]) => {
      this.proveedores = proveedores;

    });
  }

  ngOnInit() {
    this.getProveedores();
  }

}

