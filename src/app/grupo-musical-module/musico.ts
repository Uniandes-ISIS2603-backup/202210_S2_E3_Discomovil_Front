import { GrupoMusical } from "./grupoMusical";

export class Musico {

  nombre: string;

  trayectoria: string;

  videoPresentacion: string;

  imgPersonales: string;

  grupo: GrupoMusical

  constructor(nombre: string, trayectoria: string, videoPresentacion: string, imgPersonales: string, grupo: GrupoMusical) {
    this.nombre = nombre;
    this.trayectoria = trayectoria;
    this.videoPresentacion = videoPresentacion;
    this.imgPersonales = imgPersonales;
    this.grupo = grupo;
  }

}
