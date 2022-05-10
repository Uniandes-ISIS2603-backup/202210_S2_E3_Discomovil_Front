import { TestBed, async, inject } from '@angular/core/testing';
import { ProveedorService } from './proveedor.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Proveedor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProveedorService]
    });
  });

  it('should ...', inject([ProveedorService], (service: ProveedorService) => {
    expect(service).toBeTruthy();
  }));
});

