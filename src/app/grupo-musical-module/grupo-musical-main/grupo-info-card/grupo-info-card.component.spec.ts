/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GrupoInfoCardComponent } from './grupo-info-card.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { GrupoMusical } from '../../grupoMusical';
import faker from '@faker-js/faker';
import { Proveedor } from 'src/app/proveedor/proveedor';
import { GrupoMusicalService } from '../../GrupoMusical.service';

describe('GrupoInfoCardComponent', () => {
  let component: GrupoInfoCardComponent;
  let fixture: ComponentFixture<GrupoInfoCardComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientModule, RouterTestingModule],
      declarations: [ GrupoInfoCardComponent ],
      providers: [GrupoMusicalService]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoInfoCardComponent);
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

    let grupoMusical = new GrupoMusical(
      faker.datatype.number(),
      faker.name.firstName(),
      faker.datatype.number(),
      faker.lorem.sentence(),
      proveedor,
      [],
      [],
      [],
      faker.image.imageUrl());
    component.grupoMusical_id = 1;
    component.grupoMusical = grupoMusical;


    fixture.detectChanges();
    debug = fixture.debugElement;
  });

   it('should create', () => {
     expect(component.grupoMusical).toBeTruthy();
   });
});
