import { TestBed } from '@angular/core/testing';

import { UniqueEmailValidator } from './unique-email.validator';

describe('UniqueEmailValidator', () => {
  let service: UniqueEmailValidator;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniqueEmailValidator);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
