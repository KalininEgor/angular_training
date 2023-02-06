import { TestBed } from '@angular/core/testing';

import { UserResloverService } from './user-reslover.service';

describe('UserResloverService', () => {
  let service: UserResloverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserResloverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
