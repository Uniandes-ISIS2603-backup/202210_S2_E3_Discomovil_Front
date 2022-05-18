import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GrupoMusical } from '../grupoMusical';
import { GrupoMusicalService } from '../GrupoMusical.service';

@Component({
  selector: 'app-grupoMusical-list',
  templateUrl: './grupoMusical-list.component.html',
  styleUrls: ['./grupoMusical-list.component.css']
})
export class GrupoMusicalListComponent implements OnInit {

  gruposMusicales!: GrupoMusical[];

  dispGroup :boolean = false;

  currentGroup!: GrupoMusical;

  constructor(
    private grupoMusicalService: GrupoMusicalService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  loader: any;


  onSelected(grupo: GrupoMusical): void {
    this.currentGroup = grupo;
    this.dispGroup = true;
  }


  getRoute(): string {
    return this.router.url;
  }

  getGrupos(): void{
    this.grupoMusicalService.getGrupos().subscribe(grupos => this.gruposMusicales = grupos);
  }

  onLoad(params: any) : void {
    this.getGrupos();
  }

  ngOnInit() {
    this.loader = this.route.paramMap.subscribe(params => this.onLoad(params));
  }


}
