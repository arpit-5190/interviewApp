import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxElementComponent } from './checkbox-element.component';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { exception } from 'console';

describe('CheckboxElementComponent', () => {
  let component: CheckboxElementComponent;
  let fixture: ComponentFixture<CheckboxElementComponent>;
  let testCheckBoxModel = {
    'question': {
        'text': 'checkbox label'
     },
     'input': {
        'selectOptions': [
          {
            "label": "checkbox 1",
            "value": "true"
          },
          {
            "label": "checkbox 2",
            "value": "false"
          }
        ]
    }
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModuleModule],
      declarations: [ CheckboxElementComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxElementComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('render component', () => {
    component.dummyCheckboxData = testCheckBoxModel;
    fixture.detectChanges();
    debugger;
    let checkboxLabel=  fixture.debugElement.query(By.css('.moveClass')).nativeNode.children[0];
    let checkboxInstance1 =  fixture.debugElement.query(By.css('.moveClass')).nativeNode.children[1];
    let checkboxInstance2 =  fixture.debugElement.query(By.css('.moveClass')).nativeNode.children[2];

    expect(checkboxLabel.innerText).toEqual('checkbox label');
    expect(checkboxInstance1.innerText).toEqual('checkbox 1');

    expect(checkboxInstance1.children[0].children[0].children[0].checked).toBeTruthy();
    expect(checkboxInstance2.children[0].children[0].children[0].checked).toBeFalsy();
  });

});
