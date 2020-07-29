import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCodeEntryComponent } from './customer-code-entry.component';

describe('CustomerCodeEntryComponent', () => {
  let component: CustomerCodeEntryComponent;
  let fixture: ComponentFixture<CustomerCodeEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerCodeEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCodeEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
