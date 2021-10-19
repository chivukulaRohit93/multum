import { TestBed } from '@angular/core/testing';

import { Common6Service } from './common6.service';

describe('Common6Service', () => {
  let service: Common6Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Common6Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
