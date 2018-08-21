import { TestBed, inject } from '@angular/core/testing';

import { RespaldoService } from './respaldo.service';

describe('RespaldoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RespaldoService]
    });
  });

  it('should be created', inject([RespaldoService], (service: RespaldoService) => {
    expect(service).toBeTruthy();
  }));
});
