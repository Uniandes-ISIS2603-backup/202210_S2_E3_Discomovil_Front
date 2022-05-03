/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProveedorFiltroGeneroService } from './proveedor-filtro-genero.service';

describe('Service: ProveedorFiltroGenero', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProveedorFiltroGeneroService]
    });
  });

  it('should ...', inject([ProveedorFiltroGeneroService], (service: ProveedorFiltroGeneroService) => {
    expect(service).toBeTruthy();
  }));
});
