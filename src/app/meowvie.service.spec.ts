import { TestBed, inject } from '@angular/core/testing';

import { MeowvieService } from './meowvie.service';

describe('MeowvieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MeowvieService]
    });
  });

  it('should be created', inject([MeowvieService], (service: MeowvieService) => {
    expect(service).toBeTruthy();
  }));
});
