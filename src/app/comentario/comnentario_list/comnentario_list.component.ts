import { Component, OnInit } from '@angular/core';
import { Comentario } from '../comentario';
import { ComentarioService } from '../comentario.service';

@Component({
  selector: 'app-comnentario_list',
  templateUrl: './comnentario_list.component.html',
  styleUrls: ['./comnentario_list.component.css']
})
export class Comnentario_listComponent implements OnInit {

  comentarios: Array<Comentario>=[];

  constructor(private comentarioService: ComentarioService) { }


  getComentarios(): void {
    this.comentarioService.getComentarios().subscribe((comentarios) => {
      this.comentarios = comentarios;
    });
  }


  ngOnInit() {
    this.getComentarios();
  }

}
