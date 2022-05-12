import { Zona } from "./zona";
import { Proveedor } from "../proveedor/proveedor";

export class ZonaDetail extends Zona{

  proveedores: Proveedor[];

  constructor(
    latitud: number,
    longitud: number,
    nombre: string,
    proveedores: Proveedor[]
  )

    {
      super(latitud, longitud, nombre);
      this.proveedores = proveedores;
    }


}
