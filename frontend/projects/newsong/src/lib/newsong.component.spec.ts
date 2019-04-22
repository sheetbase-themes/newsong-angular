import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsongPage } from './newsong.page';

describe('NewsongPage', () => {
  let component: NewsongPage;
  let fixture: ComponentFixture<NewsongPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsongPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
