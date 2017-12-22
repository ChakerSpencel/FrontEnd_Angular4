import { TestBed, inject } from '@angular/core/testing';

import { SlivreService } from './slivre.service';

describe('SlivreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SlivreService]
    });
  });

  it('should be created', inject([SlivreService], (service: SlivreService) => {
    expect(service).toBeTruthy();
  }));
});
