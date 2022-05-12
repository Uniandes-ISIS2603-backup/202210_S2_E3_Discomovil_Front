/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PaqueteDetailComponent } from './paquete-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { PaqueteService } from '../paquete.service';
import faker from '@faker-js/faker';
import { ProveedorDetail } from 'src/app/proveedor/proveedor-detail';
import { PaqueteDetail } from '../Paquete-Detail';

describe('PaqueteDetailComponent', () => {
  let component: PaqueteDetailComponent;
  let fixture: ComponentFixture<PaqueteDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ PaqueteDetailComponent ],
      providers: [ PaqueteService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaqueteDetailComponent);
    component = fixture.componentInstance;

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

    component.paqueteDetail =
      new PaqueteDetail(
       proveedor,
       faker.lorem.sentence(),
       faker.lorem.sentence(),
       faker.lorem.sentence(),
       faker.datatype.number(),

      );

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
