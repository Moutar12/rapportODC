import { TestBed } from '@angular/core/testing';

import { EmprunteService } from './emprunte.service';

describe('EmprunteService', () => {
  let service: EmprunteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmprunteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
