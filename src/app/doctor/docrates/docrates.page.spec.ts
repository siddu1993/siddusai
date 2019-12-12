import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocratesPage } from './docrates.page';

describe('DocratesPage', () => {
  let component: DocratesPage;
  let fixture: ComponentFixture<DocratesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocratesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocratesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
