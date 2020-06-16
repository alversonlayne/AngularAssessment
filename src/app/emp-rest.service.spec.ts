import { TestBed } from '@angular/core/testing';

import { EmpRestService } from './emp-rest.service';

describe('EmpRestService', () => {
  let service: EmpRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
