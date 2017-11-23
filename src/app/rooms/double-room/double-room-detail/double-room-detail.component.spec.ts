import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleRoomDetailComponent } from './double-room-detail.component';

describe('DoubleRoomDetailComponent', () => {
  let component: DoubleRoomDetailComponent;
  let fixture: ComponentFixture<DoubleRoomDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoubleRoomDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleRoomDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
