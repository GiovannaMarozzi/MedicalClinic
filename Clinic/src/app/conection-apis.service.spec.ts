import { TestBed } from '@angular/core/testing';

import { ConectionApisService } from './conection-apis.service';

describe('ConectionApisService', () => {
  let service: ConectionApisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConectionApisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
