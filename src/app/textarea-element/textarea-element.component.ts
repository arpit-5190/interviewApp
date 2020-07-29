import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-textarea-element',
  templateUrl: './textarea-element.component.html',
  styleUrls: ['./textarea-element.component.scss']
})

export class TextareaElementComponent implements OnInit {

  //Define Input variable which is used to get data from parent app component to child component
  @Input() dummyTextAreaData:any;

  //Define output variable to pass the valuw of the question to parent component
  @Output() public onTextAreaValueChange = new EventEmitter();

  //Define property to store input value
  textAreaValue:any = {};

  //Define an event which is called while input text field will change value
  textAreaChange = (e:any):void => {
    this.textAreaValue["label"] = this.dummyTextAreaData.question.text;
    this.textAreaValue["value"] = e;
    this.onTextAreaValueChange.emit(this.textAreaValue);
  }

  //Define a form control instance which will be used for control validation
  public textareaControl:any;

  constructor() { }

  ngOnInit() {
    
    this.textAreaValue["label"] = this.dummyTextAreaData.question.label;
    this.textAreaValue["value"] = this.dummyTextAreaData.question.answer;

    //Define a form control instance which will use for validation
    this.textareaControl = new FormControl(this.textAreaValue["value"], Validators.required);
  
  }

}
