import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProveedorDetail } from '../proveedor-detail';
import { ProveedorService } from '../proveedor.service';

@Component({
  selector: 'app-proveedor-detail',
  templateUrl: './proveedor-detail.component.html',
  styleUrls: ['./proveedor-detail.component.css']
})
export class ProveedorDetailComponent implements OnInit {

  proveedorId!: string;
  @Input() proveedorDetail!: ProveedorDetail;

  constructor(
    private route: ActivatedRoute,
    private proveedorService: ProveedorService) { }

  getProveedor(){
    this.proveedorService.getProveedor(this.proveedorId).subscribe(proveedor=>{
      this.proveedorDetail = proveedor;
    })
  }

  ngOnInit() {
    if(this.proveedorDetail === undefined){
      this.proveedorId = this.route.snapshot.paramMap.get('id')!
      if(this.proveedorId){
        this.getProveedor();
      }
    }
  }

}

