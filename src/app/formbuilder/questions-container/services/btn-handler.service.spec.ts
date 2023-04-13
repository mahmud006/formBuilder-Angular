import { TestBed } from '@angular/core/testing';

import { BtnHandlerService } from './btn-handler.service';

describe('BtnHandlerService', () => {
  let service: BtnHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BtnHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
