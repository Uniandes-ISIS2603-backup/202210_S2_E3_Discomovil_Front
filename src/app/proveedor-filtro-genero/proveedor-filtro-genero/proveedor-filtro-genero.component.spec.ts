/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProveedorFiltroGeneroComponent } from './proveedor-filtro-genero.component';
import { faker } from '@faker-js/faker';
import { ProveedorFiltroGeneroModule } from '../proveedor-filtro-genero.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { Proveedor } from 'src/app/proveedor/proveedor';

describe('ProveedorMainComponent', () => {
  let component: ProveedorFiltroGeneroComponent;
  let fixture: ComponentFixture<ProveedorFiltroGeneroComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule, RouterTestingModule],
      declarations: [ ProveedorFiltroGeneroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedorFiltroGeneroComponent);
    component = fixture.componentInstance;

    component.proveedores[0] = new Proveedor(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.image.imageUrl(),
        [],
        [],
        [],
        []
      );

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should have an img element', () => {
  //   expect(debug.query(By.css('img')).attributes['alt']).toEqual(
  //     component.proveedores[0].nombre
  //   );
  // });

});

