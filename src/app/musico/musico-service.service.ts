import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Musico } from '../grupo-musical-module/musico';

@Injectable({
  providedIn: 'root'
})
export class MusicoServiceService {

  private apiUrl = environment.musicosUrl;

  constructor(private http: HttpClient) { }

  getMusico(id: number): Observable<Musico>
  {
    return this.http.get<Musico>(this.apiUrl + id.toString() + '.json');
  }

}
