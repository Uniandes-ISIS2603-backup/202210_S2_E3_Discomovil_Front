import { Component, OnInit } from '@angular/core';
import { Paquete } from '../paquete';
import { PaqueteService } from '../paquete.service';

@Component({
  selector: 'app-paquete-list',
  templateUrl: './paquete-list.component.html',
  styleUrls: ['./paquete-list.component.css']
})
export class PaqueteListComponent implements OnInit {

  paquetes: Array<Paquete> =[];

  constructor(private paqueteService:PaqueteService) { }

  getPaquetes(): void {
    this.paqueteService.getPaquetes().subscribe((paquetes) => {
      this.paquetes = paquetes;
    });
  }

  ngOnInit() {
    this.getPaquetes();
  }

}
