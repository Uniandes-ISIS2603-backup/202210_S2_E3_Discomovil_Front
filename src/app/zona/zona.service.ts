import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { ZonaDetail } from './zona-detail';
import { Zona } from './zona';


@Injectable({
  providedIn: 'root'
})
export class ZonaService {
  private apiURL: string = environment.zonasUrl;

constructor(private http: HttpClient) { }

  getZonas(): Observable<Zona[]> {
    console.log(this.apiURL+".json");
    return this.http.get<Zona[]>(this.apiURL+".json");

  }
}
