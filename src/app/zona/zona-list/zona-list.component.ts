import { Component, OnInit } from '@angular/core';
import { Zona } from '../zona';
import { ZonaService } from '../zona.service';

@Component({
  selector: 'app-zona-list',
  templateUrl: './zona-list.component.html',
  styleUrls: ['./zona-list.component.css']
})
export class ZonaListComponent implements OnInit {
  zonas: Array<Zona> = [];

  constructor(private ZonaService: ZonaService) { }

  getZonas(): void {
    this.ZonaService.getZonas().subscribe(zonas => this.zonas = zonas);
  }

  ngOnInit() {
    this.getZonas();
  }

}
