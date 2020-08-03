import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerElementComponent } from './datepicker-element.component';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DatepickerElementComponent', () => {
  let component: DatepickerElementComponent;
  let fixture: ComponentFixture<DatepickerElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModuleModule, FormsModule, ReactiveFormsModule , BrowserAnimationsModule],
      declarations: [ DatepickerElementComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerElementComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    // Note: this is angular material component, no need to verify library component.
  });
});
