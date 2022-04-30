import { Proveedor } from '../proveedor/proveedor';

export class RedSocial {
  id: number;
  nombre: string;
  usuario: string;
  url: string;
  proveedor: Proveedor;

  constructor(
    id: number,
    nombre: string,
    usuario: string,
    url: string,
    proveedor: Proveedor
  ) {
    this.id = id;
    this.nombre = nombre;
    this.usuario = usuario;
    this.url = url;
    this.proveedor = proveedor;
  }
}
