import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabpatienthistPage } from './labpatienthist.page';

describe('LabpatienthistPage', () => {
  let component: LabpatienthistPage;
  let fixture: ComponentFixture<LabpatienthistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabpatienthistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabpatienthistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
