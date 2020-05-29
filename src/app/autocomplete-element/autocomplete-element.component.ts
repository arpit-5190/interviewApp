import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
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

  //Define Form Control Instance
  autoCtrl = new FormControl();

  //Define a property which contains a list of items
  filteredItems:Observable<autoData[]>;

  //Define private property for input
  private _dummyAutocompleteData:[];

  //Define public property for store the list of items received from results
  autoListItems:autoData[];

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


  constructor() {

    //Define a method which will return the results from the list when user enter
    this.filteredItems = this.autoCtrl.valueChanges
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
  }

}
