/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Service3Component } from './service3.component';

describe('Service3Component', () => {
  let component: Service3Component;
  let fixture: ComponentFixture<Service3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Service3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Service3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
