/* tslint:disable:no-unused-variable */

import { HttpClientModule } from '@angular/common/http';
import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ClienteServiceService } from './cliente-service.service';

describe('Service: ClienteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      providers: [ClienteServiceService]
    });
  });

  it('should ...', inject([ClienteServiceService], (service: ClienteServiceService) => {
    expect(service).toBeTruthy();
  }));

  it('should get client with id 1', inject([ClienteServiceService], (service: ClienteServiceService) => {

    service.getCliente(1).subscribe(cliente => {
      expect(cliente.id).toBe(1);
    }
    );
  }
  ));

});
