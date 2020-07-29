import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-element',
  templateUrl: './input-element.component.html',
  styleUrls: ['./input-element.component.scss']
})

export class InputElementComponent implements OnInit {

  //Define input variable to get question data
  @Input() dummyInputData:any;

  public inputNumberControl:any;
  public inputTextControl:any;

  //Define output variable to pass the value of the question to middle component
  @Output() public onInputValueChange = new EventEmitter();

  //Define property to store input value
  inputValue:any ={};

  //Define an event which is called while input text field will change value
  inputChange = (e:any):void => {
    this.inputValue["label"] = this.dummyInputData.question.text;
    this.inputValue["value"] = e;
    this.onInputValueChange.emit(this.inputValue);
  }
  
  constructor() { }

  ngOnInit(): void {
    

    this.inputValue["label"] = this.dummyInputData.question.text;
    this.inputValue["value"] = this.dummyInputData.question.answer;

    this.inputNumberControl = new FormControl(this.inputValue["value"], Validators.required)
    this.inputTextControl = new FormControl(this.inputValue["value"], Validators.required)
    //This condition will check for different error message and then create form control instance
    /*if('emailErrorMsg' in this.dummyInputData.input){
      this.inputTextControl = new FormControl('',[Validators.required, Validators.email]);
    }
    else{
      this.inputTextControl = new FormControl('',Validators.required);
    }*/
  }

}
