import { TestBed } from '@angular/core/testing';

import { StudenteServices } from './studente-services';

describe('StudenteServices', () => {
  let service: StudenteServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudenteServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
