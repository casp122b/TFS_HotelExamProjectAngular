import { TestBed, inject } from '@angular/core/testing';

import { SingleRoomService } from './single-room.service';

describe('SingleRoomService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SingleRoomService]
    });
  });

  it('should be created', inject([SingleRoomService], (service: SingleRoomService) => {
    expect(service).toBeTruthy();
  }));
});
