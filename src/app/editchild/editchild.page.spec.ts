import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditchildPage } from './editchild.page';

describe('EditchildPage', () => {
  let component: EditchildPage;
  let fixture: ComponentFixture<EditchildPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditchildPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditchildPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
