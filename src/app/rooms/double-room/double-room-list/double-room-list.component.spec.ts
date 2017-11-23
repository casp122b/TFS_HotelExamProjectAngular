import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleRoomListComponent } from './double-room-list.component';

describe('DoubleRoomListComponent', () => {
  let component: DoubleRoomListComponent;
  let fixture: ComponentFixture<DoubleRoomListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoubleRoomListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleRoomListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
