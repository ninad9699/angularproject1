import { TestBed } from '@angular/core/testing';

import { Serviceapi4Service } from './serviceapi4.service';

describe('Serviceapi4Service', () => {
  let service: Serviceapi4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Serviceapi4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
