import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginuserbundleComponent } from './loginuserbundle.component';

describe('LoginuserbundleComponent', () => {
  let component: LoginuserbundleComponent;
  let fixture: ComponentFixture<LoginuserbundleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginuserbundleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginuserbundleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
