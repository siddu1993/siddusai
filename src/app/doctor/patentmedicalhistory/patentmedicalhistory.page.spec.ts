import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatentmedicalhistoryPage } from './patentmedicalhistory.page';

describe('PatentmedicalhistoryPage', () => {
  let component: PatentmedicalhistoryPage;
  let fixture: ComponentFixture<PatentmedicalhistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatentmedicalhistoryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatentmedicalhistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
