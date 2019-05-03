import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LyricPage } from './lyric.page';

describe('LyricPage', () => {
  let component: LyricPage;
  let fixture: ComponentFixture<LyricPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LyricPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LyricPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
