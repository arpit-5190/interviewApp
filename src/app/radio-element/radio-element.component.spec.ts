import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';

import { RadioElementComponent } from './radio-element.component';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
 // import { By } from 'protractor';

describe('RadioElementComponent', () => {
  let component: RadioElementComponent;
  let fixture: ComponentFixture<RadioElementComponent>;
  let testRadioModel = {
    'question': {
        'text': 'Lable text'
     },
    'input': {
      'type': "radio",
      'selectOptions': [
            {
              "label": "Option_1",
              "value": "1"
            },
            {
              "label": "Option_2",
              "value": "2"
            },{
              "label": "Option_3",
              "value": "3"
            }],
      'requiredErrorMsg': 'Frequency field is required'
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModuleModule],
      declarations: [ RadioElementComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioElementComponent);
    component = fixture.componentInstance;
    component.dummyRadioData = testRadioModel;
    fixture.detectChanges();
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('render component with mock data to verify option count', () => {
    let radioEleCount =  fixture.debugElement.query(By.css('.mat-radio-group')).nativeElement.childElementCount;
    //total count = radio option + error label
    expect(radioEleCount).toEqual(4);
  });

  it('verify selected radio group value', () => {
    component.radioChange(2);
    expect(component.radioValue.value).toBe(2);
  });

});
