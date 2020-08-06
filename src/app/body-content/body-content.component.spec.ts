import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyContentComponent } from './body-content.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Observable } from 'rxjs';
import { RestApiService } from '../rest-api.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('BodyContentComponent', () => {
  let component: BodyContentComponent;
  let fixture: ComponentFixture<BodyContentComponent>;
  let testClientModel = {
    "client": {
      "firstName": "Arpit",
      "lastName": "Rathod",
      "email": "arpit.rathod@testmail.com",
      "age": 0,
      "annualIncome": 0
    },
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, MaterialModuleModule, RouterTestingModule],
      declarations: [ BodyContentComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyContentComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have client name function', () => {
    expect(component.getClientName).toBeTruthy();
  });

  it('verify client name', () => {
    expect(component.getClientName(testClientModel)).toBe('Rathod Arpit');
  });

});
