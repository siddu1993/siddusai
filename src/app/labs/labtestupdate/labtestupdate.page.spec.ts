import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabtestupdatePage } from './labtestupdate.page';

describe('LabtestupdatePage', () => {
  let component: LabtestupdatePage;
  let fixture: ComponentFixture<LabtestupdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabtestupdatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabtestupdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
