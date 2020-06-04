import { TestBed } from '@angular/core/testing';

import { HelmetsService } from './helmets.service';

describe('HelmetsService', () => {
  let service: HelmetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelmetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
