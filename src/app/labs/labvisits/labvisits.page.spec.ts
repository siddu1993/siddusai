import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabvisitsPage } from './labvisits.page';

describe('LabvisitsPage', () => {
  let component: LabvisitsPage;
  let fixture: ComponentFixture<LabvisitsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabvisitsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabvisitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
