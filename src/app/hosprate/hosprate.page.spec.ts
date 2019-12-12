import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospratePage } from './hosprate.page';

describe('HospratePage', () => {
  let component: HospratePage;
  let fixture: ComponentFixture<HospratePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospratePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospratePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
