import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCodeEntryComponent } from './customer-code-entry.component';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
describe('CustomerCodeEntryComponent', () => {
  let component: CustomerCodeEntryComponent;
  let fixture: ComponentFixture<CustomerCodeEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModuleModule, BrowserModule, FormsModule, MatFormFieldModule, MatInputModule, BrowserAnimationsModule, HttpClientModule],
      declarations: [ CustomerCodeEntryComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCodeEntryComponent);
    component = fixture.componentInstance;
   // fixture.detectChanges();
  });

  // it('should create', () => {
  //   //Note: once this component will be in route path, will write for this...
  //   expect(component).toBeTruthy();
  // });

  // it('verify number function', () => {
      //expect(component.numberOnly(1)).toBeTruthy();
  // });

  // it('verify number function', () => {
      //expect(component.numberOnly(A)).toBeFalsy();
  // });
});
