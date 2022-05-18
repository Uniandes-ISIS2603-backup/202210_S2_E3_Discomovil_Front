/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { Cliente } from 'src/app/cliente/cliente';

import { Comnentario_listComponent } from './comnentario_list.component';
import { Comentario } from '../comentario';
import { ProveedorDetail } from 'src/app/proveedor/proveedor-detail';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ComentarioService } from '../comentario.service';
import { ComentarioDetail } from '../Comentario-Detail';

describe('Comnentario_listComponent', () => {
  let component: Comnentario_listComponent;
  let fixture: ComponentFixture<Comnentario_listComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ Comnentario_listComponent ],
      providers: [ ComentarioService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comnentario_listComponent);
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

    component.comentarios = [
      new ComentarioDetail(
    faker.datatype.number(),
       faker.lorem.sentence(),
       cliente,
       faker.lorem.sentence(),
       faker.datatype.number(),
       proveedor
      ),
    ];

    fixture.detectChanges();
    debug=fixture.debugElement;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
