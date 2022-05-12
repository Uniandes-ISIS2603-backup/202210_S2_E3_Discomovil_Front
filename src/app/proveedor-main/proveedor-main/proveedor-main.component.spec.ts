/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProveedorMainComponent } from './proveedor-main.component';
import { faker } from '@faker-js/faker';
import { ProveedorMainModule } from '../proveedor-main.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { Proveedor } from 'src/app/proveedor/proveedor';

describe('ProveedorMainComponent', () => {
  let component: ProveedorMainComponent;
  let fixture: ComponentFixture<ProveedorMainComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule, RouterTestingModule],
      declarations: [ ProveedorMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedorMainComponent);
    component = fixture.componentInstance;

    component.proveedor = new Proveedor(
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

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should have an img element', () => {
  //   expect(debug.query(By.css('img')).attributes['alt']).toEqual(
  //     component.proveedor.nombre
  //   );
  // });

});

