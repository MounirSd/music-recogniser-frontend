import { TestBed } from '@angular/core/testing';

import { SearchService } from './searchservice.service';

describe('SearchserviceService', () => {
  let service: SearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
