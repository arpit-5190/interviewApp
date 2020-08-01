import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectElementComponent } from './select-element.component';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('SelectElementComponent', () => {
  let component: SelectElementComponent;
  let fixture: ComponentFixture<SelectElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModuleModule],
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
});
