/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { PaqueteListComponent } from './paquete-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { PaqueteService } from '../paquete.service';
import { ProveedorDetail } from 'src/app/proveedor/proveedor-detail';
import { Paquete } from '../paquete';
import { PaqueteDetail } from '../Paquete-Detail';

describe('PaqueteListComponent', () => {
  let component: PaqueteListComponent;
  let fixture: ComponentFixture<PaqueteListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ PaqueteListComponent ],
      providers: [ PaqueteService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaqueteListComponent);
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

    component.paquetes = [
      new PaqueteDetail(
       proveedor,
       faker.lorem.sentence(),
       faker.lorem.sentence(),
       faker.lorem.sentence(),
       faker.datatype.number(),

      ),
    ];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
