import { TestBed } from '@angular/core/testing';

import { CountriesService } from './countries.service';

describe('RegionService', () => {
  let service: CountriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
