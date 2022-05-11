import { Cliente } from "../cliente/cliente";
import { Proveedor } from "../proveedor/proveedor";

export class Comentario {

  id: number;
  contenido : string;
  cliente: Cliente;
  fecha: string;
  valoracion : number;
  proveedor: Proveedor;

  constructor (id: number, contenido: string, cliente: Cliente, fecha: string, valoracion: number, proveedor: Proveedor)
  {
    this.id = id;
    this.contenido = contenido;
    this.cliente = cliente;
    this.fecha = fecha;
    this.valoracion = valoracion;
    this.proveedor = proveedor;
  }

}
