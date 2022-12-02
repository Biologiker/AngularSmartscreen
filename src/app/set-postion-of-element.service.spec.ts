import { TestBed } from '@angular/core/testing';

import { SetPostionOfElementService } from './set-postion-of-element.service';

describe('SetPostionOfElementService', () => {
  let service: SetPostionOfElementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetPostionOfElementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
