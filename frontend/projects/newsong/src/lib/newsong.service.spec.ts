import { TestBed } from '@angular/core/testing';

import { NewsongService } from './newsong.service';

describe('NewsongService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsongService = TestBed.get(NewsongService);
    expect(service).toBeTruthy();
  });
});
