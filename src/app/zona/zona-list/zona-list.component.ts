import { Component, OnInit } from '@angular/core';
import { Zona } from '../zona';
import { ZonaService } from '../zona.service';
import { ZonaDetail} from '../zona-detail';

@Component({
  selector: 'app-zona-list',
  templateUrl: './zona-list.component.html',
  styleUrls: ['./zona-list.component.css']
})
export class ZonaListComponent implements OnInit {
  zonas: Array<Zona> = [];

  selected: boolean = false;
  selectedZona!: ZonaDetail;

  onSelected(zona: ZonaDetail): void {
    this.selectedZona = zona;
    this.selected = true;
  }

  constructor(private ZonaService: ZonaService) { }

  getZonas(): void {
    this.ZonaService.getZonas().subscribe(zonas => this.zonas = zonas);
  }

  ngOnInit() {
    this.getZonas();
  }

}
