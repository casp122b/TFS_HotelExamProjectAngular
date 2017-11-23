import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRoomDetailComponent } from './single-room-detail.component';

describe('SingleRoomDetailComponent', () => {
  let component: SingleRoomDetailComponent;
  let fixture: ComponentFixture<SingleRoomDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleRoomDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleRoomDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
