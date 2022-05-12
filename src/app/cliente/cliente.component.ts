import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from './cliente';
import { ClienteServiceService } from './cliente-service.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {


  constructor(
    private clienteService: ClienteServiceService,
    private route: ActivatedRoute,
    private router : Router
  ) { }

  cliente !: Cliente;

  comentarios!: boolean;

  @Input()
  cliente_id!: number;

  loader: any;

  getRoute(): string {
    return this.router.url;
  }

  getCliente(): void {
    this.clienteService.getCliente(this.cliente_id).subscribe(cliente => this.cliente = cliente);
  }

  onLoad(params: any) : void {
    this.cliente_id = parseInt(params.get('id'));
    this.getCliente();
  }

  ngOnInit() {
    this.loader = this.route.paramMap.subscribe(params => this.onLoad(params));
  }

  dispComments() : void {
    this.comentarios = true;
    console.log(this.comentarios);
  }

  console() :void {
   console.log("hola");
  }

}
