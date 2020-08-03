import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectElementComponent } from './select-element.component';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SelectElementComponent', () => {
  let component: SelectElementComponent;
  let fixture: ComponentFixture<SelectElementComponent>;
  let testSelectModel = {
    'question': {
        'text': 'Select option'
     },
     'input': {
      'selectOptions': [
            {
              "label": "select option_1",
              "value": "1"
            },
            {
              "label": "select option_2",
              "value": "2"
            },{
              "label": "select option_3",
              "value": "3"
            }],
      'requiredErrorMsg': 'Select field is required'
    },
    'answer': 2
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModuleModule, BrowserAnimationsModule],
      declarations: [ SelectElementComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectElementComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('verify selected option is correct or not', () => {
    component.dummySelectData = testSelectModel;
    fixture.detectChanges();
    // to verify selected option is correct or not.
    //expect(component.selectValue).toEqual('2');
  });

});
