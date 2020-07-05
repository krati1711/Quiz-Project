import { TestBed } from '@angular/core/testing';

import { ActualquizService } from './actualquiz.service';

describe('ActualquizService', () => {
  let service: ActualquizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActualquizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
