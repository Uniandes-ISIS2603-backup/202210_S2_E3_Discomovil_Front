/* tslint:disable:no-unused-variable */

import { HttpClientModule } from '@angular/common/http';
import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MusicoServiceService } from './musico-service.service';

describe('Service: MusicoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      providers: [MusicoServiceService]
    });
  });

  it('should ...', inject([MusicoServiceService], (service: MusicoServiceService) => {
     expect(service).toBeTruthy();
   }));

  it ('should get all musicos', inject([MusicoServiceService], (service: MusicoServiceService) => {
    service.getMusico(1).subscribe(
      data => {
        expect(data).toBeTruthy();
      }
    );
  }
  ));
});
