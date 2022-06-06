import { Component, Input, OnInit } from '@angular/core';
import { Zona } from '../zona';
import { ZonaDetail } from '../zona-detail';
import { ZonaService } from '../zona.service';

@Component({
  selector: 'app-zona-detail',
  templateUrl: './zona-detail.component.html',
  styleUrls: ['./zona-detail.component.css']
})
export class ZonaDetailComponent implements OnInit {

  zonas: Array<Zona> =[];

  @Input()  zonaDetail! : ZonaDetail;

  constructor(private zonaService: ZonaService) { }

  getZonas(): void {
    this.zonaService.getZonas().subscribe((zonas) => {
      this.zonas = zonas;
    }
    );
  }

  ngOnInit() {
    this.getZonas();
  }

}
