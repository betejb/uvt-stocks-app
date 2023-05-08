import { TestBed } from '@angular/core/testing';

import { StocksAPIService } from './stocks-api.service';

describe('StocksAPIService', () => {
  let service: StocksAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StocksAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
