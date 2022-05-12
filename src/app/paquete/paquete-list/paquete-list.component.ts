import { Component, OnInit } from '@angular/core';
import { Paquete } from '../paquete';
import { PaqueteDetail } from '../Paquete-Detail';
import { PaqueteService } from '../paquete.service';

@Component({
  selector: 'app-paquete-list',
  templateUrl: './paquete-list.component.html',
  styleUrls: ['./paquete-list.component.css']
})
export class PaqueteListComponent implements OnInit {

  selected: Boolean = false;
  selectedPaquete!: PaqueteDetail;

  paquetes: Array<PaqueteDetail> =[];

  constructor(private paqueteService:PaqueteService) { }

  getPaquetes(): void {
    this.paqueteService.getPaquetes().subscribe((paquetes) => {
      this.paquetes = paquetes;
    });
  }

  onSelected(paquete: PaqueteDetail): void {
    this.selected = true;
    this.selectedPaquete = paquete;
  }

  ngOnInit() {
    this.getPaquetes();
  }

}
