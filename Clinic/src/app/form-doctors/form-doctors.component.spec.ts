import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDoctorsComponent } from './form-doctors.component';

describe('FormDoctorsComponent', () => {
  let component: FormDoctorsComponent;
  let fixture: ComponentFixture<FormDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDoctorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
