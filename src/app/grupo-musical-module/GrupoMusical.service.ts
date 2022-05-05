import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { GrupoMusical } from './grupoMusical';

@Injectable({
  providedIn: 'root'
})
export class GrupoMusicalService {

  private apiUrl = environment.gruposUrl;

  constructor(private http: HttpClient) { }

  getGrupo(id:number): Observable<GrupoMusical>
    {
      return this.http.get<GrupoMusical>(this.apiUrl + id.toString() + '.json');
    }

}
