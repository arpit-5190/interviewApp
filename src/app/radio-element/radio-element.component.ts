import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-radio-element',
  templateUrl: './radio-element.component.html',
  styleUrls: ['./radio-element.component.scss']
})

export class RadioElementComponent implements OnInit {

  //Define Input variable which wil communicate from parent Appc omponent to child component
  @Input() dummyRadioData:any;

  //Define Output variable which is used to pass the data from child to parent component
  @Output() public onRadioValueChange = new EventEmitter();

  //Define form control instance whic hwill be used to form validation
  public radioControl:any;

  //Define the property whihc iwll be used to pass the data in object format
  public radioValue:any = {};

  //Define the event which will be called when radio value changes
  radioChange = (value:any):void => {
    this.radioValue["label"] = this.dummyRadioData.question.text;
    this.radioValue["value"] = value;
    this.onRadioValueChange.emit(this.radioValue);
  }

  public selection:string;

  
  constructor() { }

  ngOnInit() {
    //Define the question label and answer to the Oninit
    this.radioValue["label"] = this.dummyRadioData.question.text;
    this.radioValue["value"] = this.dummyRadioData.question.answer;
    this.selection = this.radioValue["value"];
    this.radioControl = new FormControl(this.radioValue["value"], Validators.required);
  }

}