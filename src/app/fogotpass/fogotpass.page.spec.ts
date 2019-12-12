import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FogotpassPage } from './fogotpass.page';

describe('FogotpassPage', () => {
  let component: FogotpassPage;
  let fixture: ComponentFixture<FogotpassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FogotpassPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FogotpassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
