/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ZonaService } from './zona.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('Service: Zona', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      providers: [ZonaService]
    });
  });

  it('should ...', inject([ZonaService], (service: ZonaService) => {
    expect(service).toBeTruthy();
  }));
});
