import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabinformationPage } from './labinformation.page';

describe('LabinformationPage', () => {
  let component: LabinformationPage;
  let fixture: ComponentFixture<LabinformationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabinformationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabinformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
