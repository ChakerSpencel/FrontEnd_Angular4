import { TestBed, inject } from '@angular/core/testing';

import { SpanierService } from './spanier.service';

describe('SpanierService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpanierService]
    });
  });

  it('should be created', inject([SpanierService], (service: SpanierService) => {
    expect(service).toBeTruthy();
  }));
});
