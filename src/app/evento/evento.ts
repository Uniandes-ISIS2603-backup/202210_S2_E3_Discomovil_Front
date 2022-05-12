/**
 * @author Juan Esteban Arboleda
 */

import { Cliente } from "../cliente/cliente";
import { Proveedor } from "../proveedor/proveedor";

export class Evento {

	id: number;
	nombre: String;
	descripcion: String;
	fecha: Date;
  video: String;
	imagenes: String;
  // TODO: Uncoment paquete atribute when Paquete class has been created
	//paquete: Paquete;
	cliente: Cliente;
	proveedor: Proveedor;

  constructor(
    id: number,
    nombre: String,
    descripcion: String,
    fecha: Date,
    video: String,
    imagenes: String,
    //paquete: Paquete,
    cliente: Cliente,
    proveedor: Proveedor
  ) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.fecha = fecha;
    this.video = video;
    this.imagenes = imagenes;
    //this.paquete = paquete;
    this.cliente = cliente;
    this.proveedor = proveedor;
  }

}
