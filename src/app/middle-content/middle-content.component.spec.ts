import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleContentComponent } from './middle-content.component';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('MiddleContentComponent', () => {
  let component: MiddleContentComponent;
  let fixture: ComponentFixture<MiddleContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModuleModule, FormsModule, ReactiveFormsModule , BrowserAnimationsModule],
      declarations: [ MiddleContentComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleContentComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
