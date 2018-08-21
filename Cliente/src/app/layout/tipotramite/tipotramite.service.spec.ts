import { TestBed, inject } from '@angular/core/testing';

import { TipotramiteService } from './tipotramite.service';

describe('TipotramiteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipotramiteService]
    });
  });

  it('should be created', inject([TipotramiteService], (service: TipotramiteService) => {
    expect(service).toBeTruthy();
  }));
});
