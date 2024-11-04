import { TestBed } from '@angular/core/testing';

import { ZeComponentService } from './ze-component.service';

describe('ZeComponentService', () => {
  let service: ZeComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZeComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
