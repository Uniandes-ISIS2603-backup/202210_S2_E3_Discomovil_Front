import { Component, Input, OnInit } from '@angular/core';
import { Paquete } from '../paquete';
import { PaqueteDetail } from '../Paquete-Detail';


@Component({
  selector: 'app-paquete-detail',
  templateUrl: './paquete-detail.component.html',
  styleUrls: ['./paquete-detail.component.css']
})
export class PaqueteDetailComponent implements OnInit {

  @Input() paqueteDetail!: PaqueteDetail;

  constructor() { }

  ngOnInit() {
  }

}
