import { Comentario } from "../comentario/comentario";

export class Cliente {


  id: number;
  nombre: string;
  fechaDeNacimiento: string;
  email: string;
  comentarios: Comentario[];
  //eventos: Evento[];

  constructor (id: number, nombre: string, fechaDeNacimiento: string, email: string, comentarios: Comentario[])
  {
    this.id = id;
    this.nombre = nombre;
    this.fechaDeNacimiento = fechaDeNacimiento;
    this.email = email;
    this.comentarios = comentarios;
    //this.eventos = eventos;
  }



}
