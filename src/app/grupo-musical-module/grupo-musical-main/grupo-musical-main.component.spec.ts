/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GrupoMusicalMainComponent } from './grupo-musical-main.component';
import { ProveedorMainService } from 'src/app/proveedor-main/proveedor-main.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Proveedor } from 'src/app/proveedor/proveedor';
import faker from '@faker-js/faker';

describe('GrupoMusicalMainComponent', () => {
  let component: GrupoMusicalMainComponent;
  let fixture: ComponentFixture<GrupoMusicalMainComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupoMusicalMainComponent ],
      imports: [HttpClientModule, RouterTestingModule],
      providers: [ProveedorMainService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoMusicalMainComponent);
    component = fixture.componentInstance;

    let proveedor = new Proveedor(
      faker.datatype.number(),
      faker.name.firstName(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.datatype.number().toString(),
      faker.image.imageUrl(),
      [],
      [],
      [],
      []);

    component.proveedor_id = 1;
    component.proveedor = proveedor;

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

   it('should create', () => {
     expect(component.proveedor).toBeTruthy();
   });

});
