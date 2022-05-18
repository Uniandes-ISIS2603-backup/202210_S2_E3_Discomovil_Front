/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { PaqueteService } from './paquete.service';

describe('Service: Paquete', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PaqueteService]
    });
  });

  it('should ...', inject([PaqueteService], (service: PaqueteService) => {
    expect(service).toBeTruthy();
  }));
});
