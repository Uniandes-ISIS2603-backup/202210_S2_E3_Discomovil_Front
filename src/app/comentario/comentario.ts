import { Cliente } from "../cliente/cliente";

export class Comentario {

  id: number;
  comentario: string;
  cliente: Cliente;

  constructor(id: number, comentario: string, cliente: Cliente) {
    this.id = id;
    this.comentario = comentario;
    this.cliente = cliente;
  }

}
