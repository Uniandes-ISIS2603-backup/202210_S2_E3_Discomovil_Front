import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GrupoMusical } from '../../grupoMusical';
import { GrupoMusicalService } from '../../GrupoMusical.service';

@Component({
  selector: 'grupo-info-card',
  templateUrl: './grupo-info-card.component.html',
  styleUrls: ['./grupo-info-card.component.css']
})
export class GrupoInfoCardComponent implements OnInit {

  constructor(
    private grupoService: GrupoMusicalService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  grupoMusical!: GrupoMusical;

  @Input()
  grupoMusical_id!: number;

  loader: any;

  getRoute() {
    return this.router.url;
  }

  getGrupo(): void {
    this.grupoService.getGrupo(this.grupoMusical_id).subscribe(grupo => this.grupoMusical = grupo);
  }

  onLoad(params:any) {
    this.grupoMusical_id = parseInt(params.get('id'));
    this.getGrupo();
  }

  ngOnInit(): void {
      this.loader =
        this.route.paramMap.subscribe(params => this.onLoad(params));
  }

}
