import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiDashboardformComponent } from './api-dashboardform.component';

describe('ApiDashboardformComponent', () => {
  let component: ApiDashboardformComponent;
  let fixture: ComponentFixture<ApiDashboardformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiDashboardformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiDashboardformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
