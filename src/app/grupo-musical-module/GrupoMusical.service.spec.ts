/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GrupoMusicalService } from './GrupoMusical.service';

describe('Service: GrupoMusical', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GrupoMusicalService]
    });
  });

  it('should ...', inject([GrupoMusicalService], (service: GrupoMusicalService) => {
    expect(service).toBeTruthy();
  }));
});
