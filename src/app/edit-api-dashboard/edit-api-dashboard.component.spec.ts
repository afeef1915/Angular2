import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditApiDashboardComponent } from './edit-api-dashboard.component';

describe('EditApiDashboardComponent', () => {
  let component: EditApiDashboardComponent;
  let fixture: ComponentFixture<EditApiDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditApiDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditApiDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
