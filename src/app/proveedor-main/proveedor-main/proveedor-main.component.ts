import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Proveedor } from '../../proveedor/proveedor';
import { ProveedorMainService } from '../proveedor-main.service';

@Component({
  selector: 'app-proveedor-main',
  templateUrl: './proveedor-main.component.html',
  styleUrls: ['./proveedor-main.component.css'],
})
export class ProveedorMainComponent implements OnInit {
  // ---------
  // Atributos
  // ---------

  // proveedores array
  proveedores: Array<Proveedor> = [];

  idx: number = 0;

  provId!: string;
  @Input() proveedor!: Proveedor;

  constructor(
    private route: ActivatedRoute,
    public proveeedorMainService: ProveedorMainService
  ) {}

  getProveedores() {
    this.proveeedorMainService
      .getProveedores()
      .subscribe((proveedores: Proveedor[]) => {
        this.proveedores = proveedores;
      });
  }

  getProveedor() {
    this.proveeedorMainService
      .getProveedor(this.provId)
      .subscribe((proveedor: Proveedor) => {
        this.proveedor = proveedor;
      });
  }

  ngOnInit() {
    //this.getProveedores();

    if (this.proveedor === undefined) {
      this.provId = this.route.snapshot.paramMap.get('id')!;
      if (this.provId) {
        this.getProveedor();
      }
    }
  }
}
