import { RedSocial } from "../red-social/red-social";

export class Proveedor {
  id: number;
  nombre: string;
  descripcion: string;
  trayectoria: string;
  calificacion: string;
  imagen: string;
  redesSociales: RedSocial[];
  // comentarios: Comentario[],
  // equiposSonido: EquipoSonido[],
  // gruposMusicales: GrupoMusical[],
  // paquetes: Paquete[],
  // zonas: Zona[],
  // eventos: Evento[]

  constructor(
    id: number,
    nombre: string,
    descripcion: string,
    trayectoria: string,
    calificacion: string,
    imagen: string,
    redesSociales: RedSocial[]
  ) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.trayectoria = trayectoria;
    this.calificacion = calificacion;
    this.imagen = imagen;
    this.redesSociales = redesSociales;
  }
}
