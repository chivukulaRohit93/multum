import { TestBed } from '@angular/core/testing';

import { Common4Service } from './common4.service';

describe('Common4Service', () => {
  let service: Common4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Common4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
