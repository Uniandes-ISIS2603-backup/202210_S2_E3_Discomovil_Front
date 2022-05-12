import { Component, OnInit } from '@angular/core';
import { Comentario } from '../comentario';
import { ComentarioDetail } from '../Comentario-Detail';
import { ComentarioService } from '../comentario.service';

@Component({
  selector: 'app-comnentario_list',
  templateUrl: './comnentario_list.component.html',
  styleUrls: ['./comnentario_list.component.css']
})
export class Comnentario_listComponent implements OnInit {

  selected: Boolean = false;
  selectedComentario!: ComentarioDetail;

  comentarios: Array<ComentarioDetail>=[];

  constructor(private comentarioService: ComentarioService) { }


  getComentarios(): void {
    this.comentarioService.getComentarios().subscribe((comentarios) => {
      this.comentarios = comentarios;
    });
  }

  onSelected(comentario: ComentarioDetail): void {
    this.selected = true;
    this.selectedComentario = comentario;
  }


  ngOnInit() {
    this.getComentarios();
  }

}
