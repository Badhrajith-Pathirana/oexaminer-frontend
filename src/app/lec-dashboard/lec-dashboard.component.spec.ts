import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecDashboardComponent } from './lec-dashboard.component';

describe('LecDashboardComponent', () => {
  let component: LecDashboardComponent;
  let fixture: ComponentFixture<LecDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
