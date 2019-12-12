import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LipidprofilePage } from './lipidprofile.page';

describe('LipidprofilePage', () => {
  let component: LipidprofilePage;
  let fixture: ComponentFixture<LipidprofilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LipidprofilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LipidprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
