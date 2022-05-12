import { Proveedor } from "../proveedor/proveedor";
import { Paquete } from "./paquete";

export class PaqueteDetail extends Paquete{

  constructor(
    proveedor: Proveedor,
    nombre: string,
    descripcion: string,
    metadata: string,
    costo: number
    )
    {
      super(proveedor, nombre, descripcion, metadata, costo);
    }
}
