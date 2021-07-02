import { TestBed } from '@angular/core/testing';

import { Common5Service } from './common5.service';

describe('Common5Service', () => {
  let service: Common5Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Common5Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
