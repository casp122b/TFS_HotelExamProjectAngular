import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRoomCreateComponent } from './single-room-create.component';

describe('SingleRoomCreateComponent', () => {
  let component: SingleRoomCreateComponent;
  let fixture: ComponentFixture<SingleRoomCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleRoomCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleRoomCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
