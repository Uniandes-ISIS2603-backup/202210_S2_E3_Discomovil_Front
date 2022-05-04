import { Proveedor } from './proveedor';
import { RedSocial } from '../red-social/red-social';
import { GrupoMusical } from '../grupo-musical-module/grupoMusical';


export class ProveedorDetail extends Proveedor {


  constructor(
    id: number,
    nombre: string,
    descripcion: string,
    trayectoria: string,
    calificacion: string,
    imagen: string,
    redesSociales:RedSocial [],
    gruposMusicales: GrupoMusical[]

  ) {
    super(id, nombre, descripcion, trayectoria,calificacion, imagen,redesSociales, gruposMusicales);

  }
}
