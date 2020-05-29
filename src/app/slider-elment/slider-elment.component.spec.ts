import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderElmentComponent } from './slider-elment.component';

describe('SliderElmentComponent', () => {
  let component: SliderElmentComponent;
  let fixture: ComponentFixture<SliderElmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderElmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderElmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
