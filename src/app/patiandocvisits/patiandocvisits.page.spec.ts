import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatiandocvisitsPage } from './patiandocvisits.page';

describe('PatiandocvisitsPage', () => {
  let component: PatiandocvisitsPage;
  let fixture: ComponentFixture<PatiandocvisitsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatiandocvisitsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatiandocvisitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
