import { Cliente } from "../cliente/cliente";
import { Proveedor } from "../proveedor/proveedor";
import { Comentario } from "./comentario";

export class ComentarioDetail extends Comentario{

  constructor(
  id: number,
  contenido : string,
  cliente: Cliente,
  fecha: string,
  valoracion : number,
  proveedor: Proveedor,
  )
{
  super(id,contenido, cliente, fecha, valoracion, proveedor);
}
}
