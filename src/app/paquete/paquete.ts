import { Proveedor } from "../proveedor/proveedor";

export class Paquete {
  proveedor: Proveedor;
 // cliente: Cliente;
  contenido: string;
  fecha: string;
  valoracion: number;
  constructor(
    proveedor: Proveedor,
    cliente: Cliente,
    contenido: string,
    fecha: string,
    valoracion: number
  ) {
    this.proveedor = proveedor;
    this.cliente = cliente;
    this.contenido = contenido;
    this.fecha = fecha;
    this.valoracion = valoracion;
  }
}
