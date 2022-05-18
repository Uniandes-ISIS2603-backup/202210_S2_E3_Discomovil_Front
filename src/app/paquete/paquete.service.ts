import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Paquete } from './paquete';
import { PaqueteDetail } from './Paquete-Detail';


@Injectable({
  providedIn: 'root'
})
export class PaqueteService {

  private apiUrl:string =environment.paqueteUrl;

constructor(private http: HttpClient) { }

getPaquetes(): Observable<PaqueteDetail[]> {
  return this.http.get<PaqueteDetail[]>(this.apiUrl);
}

}
