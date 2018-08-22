import { TestBed, inject } from '@angular/core/testing';

import { RecorridoService } from './recorrido.service';

describe('RecorridoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecorridoService]
    });
  });

  it('should be created', inject([RecorridoService], (service: RecorridoService) => {
    expect(service).toBeTruthy();
  }));
});
