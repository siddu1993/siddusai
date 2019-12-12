import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PateintuserhistPage } from './pateintuserhist.page';

describe('PateintuserhistPage', () => {
  let component: PateintuserhistPage;
  let fixture: ComponentFixture<PateintuserhistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PateintuserhistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PateintuserhistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
