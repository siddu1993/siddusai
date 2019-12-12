import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpersonsPage } from './addpersons.page';

describe('AddpersonsPage', () => {
  let component: AddpersonsPage;
  let fixture: ComponentFixture<AddpersonsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpersonsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpersonsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
