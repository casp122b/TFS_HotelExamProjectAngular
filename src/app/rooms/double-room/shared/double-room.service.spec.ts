import { TestBed, inject } from '@angular/core/testing';

import { DoubleRoomService } from './double-room.service';

describe('DoubleRoomService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DoubleRoomService]
    });
  });

  it('should be created', inject([DoubleRoomService], (service: DoubleRoomService) => {
    expect(service).toBeTruthy();
  }));
});
