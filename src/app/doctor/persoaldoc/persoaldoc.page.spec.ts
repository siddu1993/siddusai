import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersoaldocPage } from './persoaldoc.page';

describe('PersoaldocPage', () => {
  let component: PersoaldocPage;
  let fixture: ComponentFixture<PersoaldocPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersoaldocPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersoaldocPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
