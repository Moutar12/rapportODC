import { TestBed } from '@angular/core/testing';

import { LivreLivreService } from './livre-livre.service';

describe('LivreLivreService', () => {
  let service: LivreLivreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivreLivreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
