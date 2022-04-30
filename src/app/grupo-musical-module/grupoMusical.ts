import { Proveedor } from "../proveedor/proveedor";
import { Genero } from "./genero";
import { Cancion } from "./cancion";
import { Musico } from "./musico";
export class GrupoMusical {

  id: number;
  nombre: string;
  precio: number;
  descripcion: string;
  proveedor: Proveedor;
  generos: Genero[];
  canciones: Cancion[];
  musicos: Musico[];

  constructor (id: number, nombre: string, precio: number, descripcion: string, proveedor: Proveedor, generos: Genero[], canciones: Cancion[], musicos: Musico[]) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.descripcion = descripcion;
    this.proveedor = proveedor;
    this.generos = generos;
    this.canciones = canciones;
    this.musicos = musicos;
  }

}
