/* tslint:disable:no-unused-variable */

import { HttpClientModule } from '@angular/common/http';
import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ComentarioService } from './comentario.service';

describe('Service: Comentario', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      providers: [ComentarioService]
    });
  });

  it('should ...', inject([ComentarioService], (service: ComentarioService) => {
    expect(service.getComentarios()).toBeTruthy();
  }));
});
