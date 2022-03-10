import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildValidationComponent } from './child-validation.component';

describe('ChildValidationComponent', () => {
  let component: ChildValidationComponent;
  let fixture: ComponentFixture<ChildValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
