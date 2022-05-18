/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ZonaListComponent } from './zona-list.component';
import { faker } from '@faker-js/faker';
import { Proveedor } from 'src/app/proveedor/proveedor';
import {Zona} from '../zona';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import {ZonaService} from '../zona.service';


describe('ZonaListComponent', () => {
  let component: ZonaListComponent;
  let fixture: ComponentFixture<ZonaListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ ZonaListComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonaListComponent);
    component = fixture.componentInstance;

    let proveedor = new Proveedor(
      faker.datatype.number(),
      faker.lorem.sentence(), //nombre
      faker.lorem.sentence(), //descripcion
      faker.lorem.sentence(),  //trayectorio
      faker.lorem.sentence(),  //calificacion
      faker.image.imageUrl(), //imagen
      [],
      [],
      [],
      []
    );

    // component.zonas = [
    //   new ZonaDetail(
    //     faker.datatype.number(),
    //     faker.datatype.number(),
    //     faker.lorem.sentence(),
    //     proveedor
    //   ),
    // ];


    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
