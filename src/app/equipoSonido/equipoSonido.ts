/**
 * @author Juan Esteban Arboleda R.
 */

import { Proveedor } from "../proveedor/proveedor";

export class EquipoSonido {


	Id: number;
	nombre: String;
	descripcion: String;
	proveedor: Proveedor;

  constructor
  (
    Id: number,
    nombre: String,
    descripcion: String,
    proveedor: Proveedor
  )
  {
    this.Id = Id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.proveedor = proveedor;
  }

}

