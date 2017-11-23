import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleRoomCreateComponent } from './double-room-create.component';

describe('DoubleRoomCreateComponent', () => {
  let component: DoubleRoomCreateComponent;
  let fixture: ComponentFixture<DoubleRoomCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoubleRoomCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleRoomCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
