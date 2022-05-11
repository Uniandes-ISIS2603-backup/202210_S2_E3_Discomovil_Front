import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {


private clientesUrl = environment.clientesUrl;


constructor(
  private http: HttpClient
) { }


getCliente(id:number): Observable<Cliente>
  {
    return this.http.get<Cliente>(this.clientesUrl + id.toString() + '.json');

  }

}
