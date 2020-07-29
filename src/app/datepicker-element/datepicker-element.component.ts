import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatDatepickerInput, MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-datepicker-element',
  templateUrl: './datepicker-element.component.html',
  styleUrls: ['./datepicker-element.component.scss'],
  providers:[DatePipe]
})

export class DatepickerElementComponent implements OnInit {


  //Define an Input variable which is used to navigate data from parent app component to child component
  @Input() dummyDatepickerData:any;
  
  //Define form control instance
  datepickerControl = new FormControl();

  //Define output variable to pass the value of the question to middle component
  @Output() public onDatepickerValueChange = new EventEmitter();

  //Define a property to sore autocomplete value
  datepickerValue:any = {};

  dateValue:any;

  //define an event which is called while input text field will change value
  datepickerChange = (e:any):void => {
    console.log("datepicker change", e);
    this.dateValue = this.datePipe.transform(e, 'MM/dd/yyyy');

    console.log("Show date value", this.dateValue);
    this.datepickerValue["label"] = this.dummyDatepickerData.question.text;
    this.datepickerValue["value"] = this.dateValue;
    this.onDatepickerValueChange.emit(this.datepickerValue);
  }

  addEvent(type:string, event:MatDatepickerInputEvent<Date>){

  }


  constructor(private datePipe:DatePipe) { }

  ngOnInit() {

    this.datepickerValue["label"] = this.dummyDatepickerData.question.text;
    this.datepickerValue["value"] = this.dummyDatepickerData.question.answer;

    //Pass the date value in date object format
    this.dateValue = new Date(this.datepickerValue["value"]);

    this.datepickerControl = new FormControl(this.dateValue,Validators.required);
  }

}
