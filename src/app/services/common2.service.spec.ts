import { TestBed } from '@angular/core/testing';

import { Common2Service } from './common2.service';

describe('Common2Service', () => {
  let service: Common2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Common2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
