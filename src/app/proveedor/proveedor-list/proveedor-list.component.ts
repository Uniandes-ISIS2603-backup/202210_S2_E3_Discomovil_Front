import { Component, OnInit } from '@angular/core';
import { Proveedor } from '../proveedor';
import { ProveedorDetail } from '../proveedor-detail';
import { ProveedorService } from '../proveedor.service';

@Component({
  selector: 'app-proveedor-list',
  templateUrl: './proveedor-list.component.html',
  styleUrls: ['./proveedor-list.component.css']
})
export class ProveedorListComponent implements OnInit {
   proveedores: Array<Proveedor> = [];
   selected: Boolean = false;
   selectedProveedor!: ProveedorDetail;

  constructor(public proveedorService: ProveedorService) { }
  getProveedores() {
    this.proveedorService.getProveedores().subscribe((proveedores: Proveedor[]) => {
      this.proveedores = proveedores;

    });
  }
  onSelected(proveedor: ProveedorDetail): void {
    this.selected = true;
    this.selectedProveedor = proveedor;
  }

  ngOnInit() {
    this.getProveedores();
  }

}

