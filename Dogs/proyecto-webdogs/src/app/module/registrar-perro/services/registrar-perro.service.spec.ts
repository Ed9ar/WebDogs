import { TestBed } from '@angular/core/testing';

import { RegistrarPerroService } from './registrar-perro.service';

describe('RegistrarPerroService', () => {
  let service: RegistrarPerroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrarPerroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
