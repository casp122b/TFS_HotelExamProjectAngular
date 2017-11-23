import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRoomListComponent } from './single-room-list.component';

describe('SingleRoomListComponent', () => {
  let component: SingleRoomListComponent;
  let fixture: ComponentFixture<SingleRoomListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleRoomListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleRoomListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
