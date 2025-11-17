import { TestBed } from '@angular/core/testing';

import { Basic } from './basic';

describe('Basic', () => {
  let service: Basic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Basic);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
