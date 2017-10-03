import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialTestthemeComponent } from './material-testtheme.component';

describe('MaterialTestthemeComponent', () => {
  let component: MaterialTestthemeComponent;
  let fixture: ComponentFixture<MaterialTestthemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialTestthemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialTestthemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
