import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Paquete } from './paquete';


@Injectable({
  providedIn: 'root'
})
export class PaqueteService {

  private apiUrl:string =environment.paqueteUrl;

constructor(private http: HttpClient) { }

getPaquetes(): Observable<Paquete[]> {
  return this.http.get<Paquete[]>(this.apiUrl);
}

}
