import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Comentario } from './comentario';
import { ComentarioDetail } from './Comentario-Detail';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  private apiUrl: string = environment.comentarioUrl;

constructor(private http: HttpClient) { }


getComentarios(): Observable<ComentarioDetail[]> {
  return this.http.get<ComentarioDetail[]>(this.apiUrl);
}

}
