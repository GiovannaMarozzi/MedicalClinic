import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationsDoctorsComponent } from './informations-doctors.component';

describe('InformationsDoctorsComponent', () => {
  let component: InformationsDoctorsComponent;
  let fixture: ComponentFixture<InformationsDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationsDoctorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationsDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
