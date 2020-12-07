import { TestBed } from '@angular/core/testing';

import { DetailsserviceService } from './detailsservice.service';

describe('DetailsserviceService', () => {
  let service: DetailsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
