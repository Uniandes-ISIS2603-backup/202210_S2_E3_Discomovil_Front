import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProveedorMainService } from 'src/app/proveedor-main/proveedor-main.service';
import { Proveedor } from 'src/app/proveedor/proveedor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grupo-musical-main',
  templateUrl: './grupo-musical-main.component.html',
  styleUrls: ['./grupo-musical-main.component.css']
})
export class GrupoMusicalMainComponent implements OnInit {

  constructor(
    private proveedorService: ProveedorMainService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  proveedor !: Proveedor;

  @Input()
  proveedor_id!: number;

  loader: any;

  getRoute(): string {
    return this.router.url;
  }

  getProveedor(): void {
    this.proveedorService.getProveedor(this.proveedor_id.toString()).subscribe(proveedor => this.proveedor = proveedor);
  }

  onLoad(params: any) : void {
    this.proveedor_id = parseInt(params.get('id'));
    this.getProveedor();
  }

  ngOnInit() {
    this.loader =
      this.route.paramMap.subscribe(params => this.onLoad(params));
  }









}
