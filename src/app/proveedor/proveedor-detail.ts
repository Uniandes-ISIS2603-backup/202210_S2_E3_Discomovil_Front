import { Proveedor } from './proveedor';
import { RedSocial } from '../red-social/red-social';


export class ProveedorDetail extends Proveedor {


  constructor(
    id: number,
    nombre: string,
    descripcion: string,
    trayectoria: string,
    calificacion: string,
    imagen: string,
    redesSociales:RedSocial []

  ) {
    super(id, nombre, descripcion, trayectoria,calificacion, imagen,redesSociales);

  }
}
