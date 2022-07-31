import { TestBed } from '@angular/core/testing';

import { HttpConfig } from './http.config';

describe('HttpConfig', () => {
  let service: HttpConfig;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpConfig);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
