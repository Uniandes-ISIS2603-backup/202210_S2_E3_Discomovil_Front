import { Component, OnInit } from '@angular/core';
import { Proveedor } from '../proveedor';
import { ProveedorService } from '../proveedor.service';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { ZonaService } from 'src/app/zona/zona.service';
import { Zona } from 'src/app/zona/zona';

@Component({
  selector: 'app-proveedor-filtro-calificacion',
  templateUrl: './proveedor-filtro-zona.component.html',
  styleUrls: ['./proveedor-filtro-zona.component.css']
})
export class ProveedorFiltroZonaComponent implements OnInit {

  proveedores: Proveedor[] = [];
  proovedoresCopy: Proveedor[] = [];
  selRating !: Number;
  selected : Number = 5;
  zones: Zona[] = [];
  zone!:Zona;
  constructor(
    public proveedorService : ProveedorService,
    public zoneService : ZonaService,
    public route : Router,
  ) {
    route.events.forEach((event) => {
      if(event instanceof NavigationEnd) {
        this.mirarProveedores();
      }
    });
  }
  selectZone(zone: Zona) {
    this.zone=zone;
    let proveedores: Proveedor[] = [];
    let  zonas: Zona[] = [];
    for (let i = 0; i < this.proveedores.length; i++) {
      zonas=this.proveedores[i].zonas;
      for (let j = 0; j < zonas.length; j++) {
        if (zonas[j].nombre == zone.nombre) {
          proveedores.push(this.proveedores[i]);
          this.proveedores=proveedores;
        }
      }
    }


  }


  mirarZonas() {
    this.zoneService.getZonas().subscribe((zones: Zona[]) => {
      this.zones = zones;
    })
  }
  mirarProveedores() {
    this.proveedorService.getProveedores().subscribe((proveedores: Proveedor[]) => {
      this.proveedores = proveedores;
      this.proovedoresCopy = {...proveedores};
    })
  }
  ngOnInit() {
    this.mirarProveedores();
    this.mirarZonas();
  }


}
