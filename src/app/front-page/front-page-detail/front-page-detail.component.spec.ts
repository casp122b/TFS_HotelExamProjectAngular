import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontPageDetailComponent } from './front-page-detail.component';

describe('FrontPageDetailComponent', () => {
  let component: FrontPageDetailComponent;
  let fixture: ComponentFixture<FrontPageDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontPageDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontPageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
