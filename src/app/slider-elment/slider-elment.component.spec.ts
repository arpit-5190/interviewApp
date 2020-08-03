import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderElmentComponent } from './slider-elment.component';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('SliderElmentComponent', () => {
  let component: SliderElmentComponent;
  let fixture: ComponentFixture<SliderElmentComponent>;
  let testSliderModel = {
    "question": {
      "text": "Height"
    },
    'input': {
      'requiredErrorMsg': 'Height is required'
    },
    'answer': 52
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModuleModule],
      declarations: [ SliderElmentComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderElmentComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('pass some value and check in html element', () => {
    component.dummySliderData = testSliderModel;
    fixture.detectChanges();
    //to verify value to feet + inch using conversion methoid result.
    expect(component.sliderVal).toEqual('4 ft 4 in');
  });

});
