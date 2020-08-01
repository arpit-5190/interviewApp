import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderElmentComponent } from './slider-elment.component';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('SliderElmentComponent', () => {
  let component: SliderElmentComponent;
  let fixture: ComponentFixture<SliderElmentComponent>;

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
});
