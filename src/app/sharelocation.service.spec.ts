import { TestBed } from '@angular/core/testing';

import { SharelocationService } from './sharelocation.service';

describe('SharelocationService', () => {
  let service: SharelocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharelocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
