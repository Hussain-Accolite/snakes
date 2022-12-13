import { TestBed } from '@angular/core/testing';

import { PlayerblockService } from './playerblock.service';

describe('PlayerblockService', () => {
  let service: PlayerblockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerblockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
