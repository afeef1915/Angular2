import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFosUserandRestBundleComponent } from './login-fos-userand-rest-bundle.component';

describe('LoginFosUserandRestBundleComponent', () => {
  let component: LoginFosUserandRestBundleComponent;
  let fixture: ComponentFixture<LoginFosUserandRestBundleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginFosUserandRestBundleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFosUserandRestBundleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
