/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GrupoMusicalListComponent } from './grupoMusical-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { GrupoMusicalService } from '../GrupoMusical.service';
import { ActivatedRoute, Router } from '@angular/router';

describe('GrupoMusicalListComponent', () => {
  let component: GrupoMusicalListComponent;
  let fixture: ComponentFixture<GrupoMusicalListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ GrupoMusicalListComponent ],
      providers: [GrupoMusicalService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoMusicalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();



    //fixture.detectChanges();
    //debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
