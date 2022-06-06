import { Component, OnInit } from '@angular/core';
import { Proveedor } from '../proveedor';
import { ProveedorService } from '../proveedor.service';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-proveedor-filtro-calificacion',
  templateUrl: './proveedor-filtro-calificacion.component.html',
  styleUrls: ['./proveedor-filtro-calificacion.component.css']
})
export class ProveedorFiltroCalificacionComponent implements OnInit {

  proveedores: Proveedor[] = [];
  selRating !: Number;
  selected : Number = 5;

  constructor(
    public proveedorService : ProveedorService,
    public route : Router,
    private aRoute : ActivatedRoute
  ) {
    route.events.forEach((event) => {
      if(event instanceof NavigationEnd) {
        this.updateRating();
        this.selected = this.selRating;
      }
    });
  }

  getProveedoresByRating(rating: number) : void {
    console.log(rating)
    this.proveedores = [];
    this.proveedorService.getProveedores().subscribe((proveedores: Proveedor[]) => {
      for(let proveedor of proveedores) {
        if (parseFloat(proveedor.calificacion) >= rating) {
          this.proveedores.push(proveedor)
        }
      }
    })
  }


  updateRating() {
    let rtng : string = this.aRoute.snapshot.paramMap.get('rating')!;
    this.getProveedoresByRating(parseInt(rtng));
    this.selRating = parseInt(rtng) - 1;
  }

  ngOnInit() {
    this.updateRating();
    this.selected = this.selRating;
  }

}
