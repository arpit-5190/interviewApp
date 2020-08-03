import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputElementComponent } from './input-element.component';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('InputElementComponent', () => {
  let component: InputElementComponent;
  let fixture: ComponentFixture<InputElementComponent>;
  let testInputNumberModel = {
    'question': {
        'text': 'input text'
     },
    'input': {
      'inputType': 'text'
      }
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModuleModule, FormsModule, ReactiveFormsModule , BrowserAnimationsModule],
      declarations: [ InputElementComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputElementComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('set some value and dispatch event and verify that value', () => {
    debugger;
    component.dummyInputData = testInputNumberModel;
    fixture.detectChanges();
    let inputEle =  fixture.debugElement.query(By.css('.mat-input-element'));
    inputEle.nativeElement.value = 'someValue'
    inputEle.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(inputEle.nativeElement.value).toBe('someValue');
  });
});
