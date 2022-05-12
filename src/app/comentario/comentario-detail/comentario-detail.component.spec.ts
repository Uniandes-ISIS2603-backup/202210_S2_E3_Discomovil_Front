/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ComentarioDetailComponent } from './comentario-detail.component';
import faker from '@faker-js/faker';
import { Cliente } from 'src/app/cliente/cliente';
import { ProveedorDetail } from 'src/app/proveedor/proveedor-detail';
import { ComentarioDetail } from '../Comentario-Detail';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ComentarioService } from '../comentario.service';

describe('ComentarioDetailComponent', () => {
  let component: ComentarioDetailComponent;
  let fixture: ComponentFixture<ComentarioDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ ComentarioDetailComponent ],
      providers: [ ComentarioService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentarioDetailComponent);
    component = fixture.componentInstance;
    let cliente = new Cliente(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      []
    );

    let proveedor = new ProveedorDetail(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      [],
      [],
      [],
      []
    );

    component.comentarioDetail =
      new ComentarioDetail(
      faker.datatype.number(),
       faker.lorem.sentence(),
       cliente,
       faker.lorem.sentence(),
       faker.datatype.number(),
       proveedor
      )
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
