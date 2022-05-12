/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardComentarioComponent } from './card-comentario.component';
import { Comentario } from '../comentario';
import faker from '@faker-js/faker';
import { Cliente } from 'src/app/cliente/cliente';
import { Proveedor } from 'src/app/proveedor/proveedor';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('CardComentarioComponent', () => {
  let component: CardComentarioComponent;
  let fixture: ComponentFixture<CardComentarioComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ CardComentarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComentarioComponent);
    component = fixture.componentInstance;
    let cliente = new Cliente(
      faker.datatype.number(),
      faker.name.firstName(),
      faker.datatype.datetime.toString(),
      faker.internet.email(),
      []
    );
    let proveedor = new Proveedor(
      faker.datatype.number(),
      faker.name.firstName(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.datatype.number().toString(),
      faker.internet.url(),
      [],
      [],
      [],
      []
    );

    component.comentario = new Comentario(
      faker.datatype.number(),
      faker.lorem.sentence(),
      cliente,
      faker.datatype.datetime.toString(),
      faker.datatype.number(),
      proveedor);

    fixture.detectChanges();
    debug = fixture.debugElement;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the contenido', () => {
    expect(debug.query(By.css('p')).nativeElement.textContent).toContain(
      component.comentario.contenido
    );
  }
  );

});
