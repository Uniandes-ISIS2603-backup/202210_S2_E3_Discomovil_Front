import { GrupoMusical } from "./grupoMusical";

export class Musico {

  id: number;

  nombre: string;

  trayectoria: string;

  videoPresentacion: string;

  imgPersonales: string;

  grupo: GrupoMusical

  constructor(id: number, nombre: string, trayectoria: string, videoPresentacion: string, imgPersonales: string, grupo: GrupoMusical) {
    this.nombre = nombre;
    this.trayectoria = trayectoria;
    this.videoPresentacion = videoPresentacion;
    this.imgPersonales = imgPersonales;
    this.grupo = grupo;
    this.id = id;
  }

}
