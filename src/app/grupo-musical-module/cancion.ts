import {GrupoMusical} from "./grupoMusical";


export class Cancion {

  id: number;

  nombre: string;

  duracion: number;

  url: string;

  grupo: GrupoMusical;

  constructor(id: number, nombre: string, duracion: number, url: string, grupo: GrupoMusical) {
    this.id = id;
    this.nombre = nombre;
    this.duracion = duracion;
    this.url = url;
    this.grupo = grupo;

  }
}
