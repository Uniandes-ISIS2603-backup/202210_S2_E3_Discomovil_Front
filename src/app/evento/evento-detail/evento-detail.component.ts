import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventoDetail } from '../evento-detail';
import { EventoService } from '../evento.service';

@Component({
  selector: 'app-evento-detail',
  templateUrl: './evento-detail.component.html',
  styleUrls: ['./evento-detail.component.css']
})
export class EventoDetailComponent implements OnInit {

  @Input() eventoDetail!: EventoDetail;
  eventoId!: String;

  constructor(private route: ActivatedRoute, private eventoService: EventoService) { }

  getEvento(){
    this.eventoService.getEvento(this.eventoId).subscribe(evento=>{
      this.eventoDetail = evento;
    })
  }
  ngOnInit() {
    if(this.eventoDetail === undefined){
      this.eventoId = this.route.snapshot.paramMap.get('id')!
      if(this.eventoId){
        this.getEvento();
      }
    }
  }

}
