import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerElementComponent } from './datepicker-element.component';

describe('DatepickerElementComponent', () => {
  let component: DatepickerElementComponent;
  let fixture: ComponentFixture<DatepickerElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepickerElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
