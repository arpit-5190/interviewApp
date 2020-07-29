import { Observable } from 'rxjs';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { map, startWith } from 'rxjs/operators'

//Define an interface
export interface autoData{
  value:string;
  viewValue:string;
}

@Component({
  selector: 'app-autocomplete-element',
  templateUrl: './autocomplete-element.component.html',
  styleUrls: ['./autocomplete-element.component.scss']
})

export class AutocompleteElementComponent implements OnInit {

  //Define private property for Input
  private _dummyAutocompleteData:[];

  //Define getter method
  get dummyAutocompleteData():any {
    return this._dummyAutocompleteData;
  }

  //Define setter method
  @Input()
  set dummyAutocompleteData(value){
    this._dummyAutocompleteData = value;
    this.autoListItems = value.input.selectOptions;
  }


  //Define Form Control Instance
  autoControl = new FormControl();

  //Define output variable to pass the value of the question to middle component
  @Output() public onAutocompleteValueChange = new EventEmitter();

  //Define property to store autocomplete value
  autoCompleteValue:any = {};

  //Define an event which is called while input text field will change value
  autoCompleteChange = (e:any): void => {
    this.autoCompleteValue["label"] = this.dummyAutocompleteData.question.text;
    this.autoCompleteValue["value"] = e;
    this.onAutocompleteValueChange.emit(this.autoCompleteValue);
  }

  //Define a property which contains a list of items
  filteredItems:Observable<autoData[]>;

  //Define public property for store the list of items received from results
  autoListItems:autoData[];

  constructor() {

    //Define a method which will return the results from the list when user enter
    this.filteredItems = this.autoControl.valueChanges
      .pipe(
        startWith(''),
        map(item => item ? this._filterItems(item) :
        this.autoListItems.slice())
      );
  }

  //This method will use for filter items
  private _filterItems(value:string) :autoData[] {
    const filterValue = value.toLowerCase();
    return this.autoListItems.filter(item => item.value.toLowerCase()
      .indexOf(filterValue) === 0);
  }

  ngOnInit(): void {
    this.autoCompleteValue["label"] = this.dummyAutocompleteData.question.text;
    this.autoCompleteValue["value"] = this.dummyAutocompleteData.question.answer;

    this.autoControl = new FormControl(this.autoCompleteValue["value"], Validators.required);
  }

}
