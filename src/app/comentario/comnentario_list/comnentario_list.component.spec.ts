/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Comnentario_listComponent } from './comnentario_list.component';

describe('Comnentario_listComponent', () => {
  let component: Comnentario_listComponent;
  let fixture: ComponentFixture<Comnentario_listComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comnentario_listComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comnentario_listComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
