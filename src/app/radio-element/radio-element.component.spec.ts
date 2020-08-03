import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';

import { RadioElementComponent } from './radio-element.component';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('render component with mock data to verify option count', () => {
    component.dummyRadioData = testRadioModel;
    fixture.detectChanges();
    let radioEleCount =  fixture.debugElement.query(By.css('.mat-radio-group')).nativeElement.childElementCount;
    //total count = radio option + error label
    expect(radioEleCount).toEqual(4);
    // debugger;
    // let radioButton =  fixture.debugElement.query(By.css('.mat-radio-button'));
    // radioButton.childNodes[0].nativeNode.click();
    // fixture.detectChanges();
    // fixture.whenStable().then(() => {
    //   let radioEleCount1 =  fixture.debugElement.query(By.css('.mat-radio-group')).nativeElement.childElementCount;
    //   // debugger;
    //   expect(radioEleCount1).toEqual(3);
    // });
  });

});
