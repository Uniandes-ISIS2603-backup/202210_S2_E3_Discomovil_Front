/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RedSocialListComponent } from './red-social-list.component';

describe('RedSocialListComponent', () => {
  let component: RedSocialListComponent;
  let fixture: ComponentFixture<RedSocialListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedSocialListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedSocialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
