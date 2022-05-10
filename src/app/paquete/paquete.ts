import { Proveedor } from "../proveedor/proveedor";

export class Paquete {
  proveedor: Proveedor;
  nombre: string;
  descripcion: string;
  metadata: string;
  costo: number;
  constructor(
    proveedor: Proveedor,
    nombre: string,
    descripcion: string,
    metadata: string,
    costo: number
  ) {
    this.proveedor = proveedor;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.metadata = metadata;
    this.costo = costo;
  }
}
