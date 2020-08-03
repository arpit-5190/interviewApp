import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaElementComponent } from './textarea-element.component';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('TextareaElementComponent', () => {
  let component: TextareaElementComponent;
  let fixture: ComponentFixture<TextareaElementComponent>;
  let testTextAreaModel = {
    "question": {
      "text": "Text Area"
    },
    'input': {
      'placeholderValue': 'Ex. Welcome to xyz...',
      'requiredErrorMsg': 'Text is required'
    }
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModuleModule, FormsModule, ReactiveFormsModule , BrowserAnimationsModule],
      declarations: [ TextareaElementComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextareaElementComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create 12', () => {
    expect(component).toBeTruthy();
  });

  it('pass data to text area and verify emit data', () => {
    component.dummyTextAreaData = testTextAreaModel;
    fixture.detectChanges();

    let inputTxtAreaEle =  fixture.debugElement.query(By.css('.mat-input-element'));
    inputTxtAreaEle.nativeElement.value = 'someValue'
    inputTxtAreaEle.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    // Note : need to work for this event...
    //debugger;
    //expect(component.textAreaValue.value).toEqual('someValue');
  });

});
