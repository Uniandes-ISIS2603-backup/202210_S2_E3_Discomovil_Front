import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Zona } from './zona';


@Injectable({
  providedIn: 'root'
})
export class ZonaService {
  private apiURL: string = environment.baseURL + 'zonas';

constructor(private http: HttpClient) { }

  getZonas(): Observable<Zona[]> {
    return this.http.get<Zona[]>(this.apiURL);


  }
}
