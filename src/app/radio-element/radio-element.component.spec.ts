import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioElementComponent } from './radio-element.component';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('RadioElementComponent', () => {
  let component: RadioElementComponent;
  let fixture: ComponentFixture<RadioElementComponent>;

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
});
