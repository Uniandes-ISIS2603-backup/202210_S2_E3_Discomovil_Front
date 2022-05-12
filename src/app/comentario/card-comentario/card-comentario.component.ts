import { Component, Input, OnInit } from '@angular/core';
import { Comentario } from '../comentario';

@Component({
  selector: 'app-card-comentario',
  templateUrl: './card-comentario.component.html',
  styleUrls: ['./card-comentario.component.css']
})
export class CardComentarioComponent implements OnInit {

  @Input()
  comentario!: Comentario;

  constructor() { }

  ngOnInit() {
  }

}
