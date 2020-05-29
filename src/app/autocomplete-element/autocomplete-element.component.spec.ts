import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteElementComponent } from './autocomplete-element.component';

describe('AutocompleteElementComponent', () => {
  let component: AutocompleteElementComponent;
  let fixture: ComponentFixture<AutocompleteElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompleteElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
