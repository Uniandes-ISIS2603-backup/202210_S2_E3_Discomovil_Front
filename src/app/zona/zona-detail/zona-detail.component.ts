import { Component, Input, OnInit } from '@angular/core';
import { Zona } from '../zona';
import { ZonaDetail } from '../zona-detail';

@Component({
  selector: 'app-zona-detail',
  templateUrl: './zona-detail.component.html',
  styleUrls: ['./zona-detail.component.css']
})
export class ZonaDetailComponent implements OnInit {

  @Input()  zonaDetail! : ZonaDetail;

  constructor() { }

  ngOnInit() {
  }

}
