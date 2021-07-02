import { TestBed } from '@angular/core/testing';

import { Common3Service } from './common3.service';

describe('Common3Service', () => {
  let service: Common3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Common3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
