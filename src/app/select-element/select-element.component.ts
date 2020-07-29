import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-element',
  templateUrl: './select-element.component.html',
  styleUrls: ['./select-element.component.scss']
})
export class SelectElementComponent implements OnInit {

  //Define an Input variable which is used to communicate with parent component
  @Input() dummySelectData:any;

  //Define an output variable which is used to pass the data from child to parent component
  @Output() public onSelectValueChange = new EventEmitter();

  //Define formcontrol which will be used for reactive form validation
  public selectControl:any;

  //Define the property which will be used to pass the data in object format
  public selectValue:any = {};

  changeClient(data){
    console.log("dropdown value", data);
  }

  //Define the event which will be called when dropdown value changes
  selectChange = (value:any): void => {
    console.log("Value CHanges for select");
    this.selectValue["label"] = this.dummySelectData.question.text;
    this.selectValue["value"] = value;
    console.log("value changes for select", this.selectValue);
    this.onSelectValueChange.emit(this.selectValue);
  }

  constructor() { }

  ngOnInit() {
    //Define the question label and answer to the onInit
    this.selectValue["label"] = this.dummySelectData.question.text;
    this.selectValue["value"] = this.dummySelectData.question.answer;

    //Define the form control instance for validation
    this.selectControl = new FormControl(this.selectValue["value"], Validators.required);
  }

}
