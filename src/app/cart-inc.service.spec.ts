import { TestBed, inject } from '@angular/core/testing';

import { CartIncService } from './cart-inc.service';

describe('CartIncService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartIncService]
    });
  });

  it('should be created', inject([CartIncService], (service: CartIncService) => {
    expect(service).toBeTruthy();
  }));
});
