import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Musico } from '../grupo-musical-module/musico';
import { Proveedor } from '../proveedor/proveedor';
import { ProveedorService } from '../proveedor/proveedor.service';
import { MusicoServiceService } from './musico-service.service';

@Component({
  selector: 'app-musico',
  templateUrl: './musico.component.html',
  styleUrls: ['./musico.component.css']
})
export class MusicoComponent implements OnInit {

  constructor(
    private musicoService: MusicoServiceService,
    private proveedorService: ProveedorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  musico !: Musico;

  proveedor !: Proveedor;

  @Input()
  musico_id!: number;

  loader:any;

  getRoute (): string
  {
    return this.router.url;
  }

  getMusico(): void
  {
    this.musicoService.getMusico(this.musico_id).subscribe(
      musico => {this.musico = musico; this.getProveedor(this.musico.grupo.proveedor.id)});
  }

  getProveedor(proveedor_id: number): void
  {
    this.proveedorService.getProveedor(proveedor_id.toString()).subscribe(proveedor => this.proveedor = proveedor);
  }

  onLoad(params: any) : void
  {
    this.musico_id= parseInt(params.get('id'));
    this.getMusico();
  }

  ngOnInit() {
    this.loader =
      this.route.paramMap.subscribe(params => this.onLoad(params));
  }

}
