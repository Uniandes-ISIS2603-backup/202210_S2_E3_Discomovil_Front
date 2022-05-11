/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ClienteServiceService } from './cliente-service.service';

describe('Service: ClienteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClienteServiceService]
    });
  });

  it('should ...', inject([ClienteServiceService], (service: ClienteServiceService) => {
    expect(service).toBeTruthy();
  }));
});
