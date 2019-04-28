import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumbotronPage } from './jumbotron.page';

describe('JumbotronPage', () => {
  let component: JumbotronPage;
  let fixture: ComponentFixture<JumbotronPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumbotronPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumbotronPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
