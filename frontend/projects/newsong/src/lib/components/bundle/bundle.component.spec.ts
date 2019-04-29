import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BundlePage } from './bundle.page';

describe('BundlePage', () => {
  let component: BundlePage;
  let fixture: ComponentFixture<BundlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BundlePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BundlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
