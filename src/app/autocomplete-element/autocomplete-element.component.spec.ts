import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteElementComponent } from './autocomplete-element.component';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AutocompleteElementComponent', () => {
  let component: AutocompleteElementComponent;
  let fixture: ComponentFixture<AutocompleteElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModuleModule, FormsModule, ReactiveFormsModule , BrowserAnimationsModule],
      declarations: [ AutocompleteElementComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteElementComponent);
    component = fixture.componentInstance;
   // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
