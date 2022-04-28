export class Proveedor {
  nombre: string;
  descripcion: string;
  experiencia: string;
  calificacion: string;
  imagen: string;

  constructor(nombre: string, descripcion: string, experiencia: string, calificacion: string, imagen: string) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.experiencia = experiencia;
    this.calificacion = calificacion;
    this.imagen = imagen;
  }
}
