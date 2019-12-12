import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicaldetailsPage } from './medicaldetails.page';

describe('MedicaldetailsPage', () => {
  let component: MedicaldetailsPage;
  let fixture: ComponentFixture<MedicaldetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicaldetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicaldetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
