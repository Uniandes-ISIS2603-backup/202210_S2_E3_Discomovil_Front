import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Evento } from './evento';

@Injectable({
  providedIn: 'root'
})

export class EventoService {

  private apiUrl = environment.eventoUrl;

  constructor(private http: HttpClient) { }

  getEventos() : Observable<Evento[]> {
    return this.http.get<Evento[]>(this.apiUrl + ".json");
  }

  getEvento(id: String) : Observable<Evento> {
    return this.http.get<Evento>(this.apiUrl + id + ".json");
  }

}
