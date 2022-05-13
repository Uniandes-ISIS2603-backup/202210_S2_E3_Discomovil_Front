/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ZonaListComponent } from './zona-list.component';
import { ZonaDetailComponent } from '../zona-detail/zona-detail.component';
import { faker } from '@faker-js/faker';
import { ZonaDetail } from '../zona-detail';
import { Proveedor } from 'src/app/proveedor/proveedor';

describe('ZonaListComponent', () => {
  let component: ZonaDetailComponent;
  let fixture: ComponentFixture<ZonaDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZonaDetailComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonaDetailComponent);
    component = fixture.componentInstance;

    let proveedor = new Proveedor(
      faker.random.number(),  //id
      faker.name.firstName(), //nombre
      faker.lorem.sentence(), //descripcion
      faker.lorem.sentence(),  //trayectorio
      faker.lorem.sentence(),  //calificacion
      faker.image.imageUrl(), //imagen
      [],
      []
    );

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
