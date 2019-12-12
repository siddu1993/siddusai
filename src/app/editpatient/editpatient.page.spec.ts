import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpatientPage } from './editpatient.page';

describe('EditpatientPage', () => {
  let component: EditpatientPage;
  let fixture: ComponentFixture<EditpatientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditpatientPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpatientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
