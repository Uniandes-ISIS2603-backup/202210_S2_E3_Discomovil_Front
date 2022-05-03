import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proveedor } from '../proveedor/proveedor';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProveedorMainService {
  //private apiUrl = environment.baseUrl;
  private apiUrl = '../../assets/proveedores';

  constructor(private http: HttpClient) {}

  getProveedores(): Observable<Proveedor[]> {
    return this.http.get<Proveedor[]>(this.apiUrl + '.json');
  }

  getProveedor(id: string): Observable<Proveedor> {
    return this.http.get<Proveedor>(this.apiUrl + id + '.json');
  }
}
