import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-slider-elment',
  templateUrl: './slider-elment.component.html',
  styleUrls: ['./slider-elment.component.scss']
})
export class SliderElmentComponent implements OnInit {
  
  //Define Input variable which is used to get data from parent App component to child component
  @Input() dummySliderData:any;

  //Define form control instance
  public sliderControl:any;

  //Define output variable to pass the value of question to middle component
  @Output() public onSliderValueChange = new EventEmitter();

  //Define property to store input value
  sliderValue:any = {};

  sliderVal;

  //Define an event which is called while slider will change value
  sliderChange = (e:any):void => {
    this.sliderValue["label"] = this.dummySliderData.question.text;
    this.sliderValue["value"] = '"' + e + '"';
    this.conversion(e);
    this.onSliderValueChange.emit(this.sliderValue);
  }

  //Define conversion method
  conversion = (value) => {
    if(this.dummySliderData.question.text == 'Height'){
      let realFeet = value*0.083333;
      let feet = Math.floor(realFeet);
      let inches = Math.round((realFeet - feet) * 12);
      if(inches == 12){
        feet = feet + 1;
        inches = 0;
      }
      let finalVal = feet + " ft " + inches + " in";
      this.sliderVal = finalVal;
    }
  }

  constructor() { }

  ngOnInit() {
    this.sliderValue["label"] = this.dummySliderData.question.text;
    this.sliderValue["value"] = this.dummySliderData.answer;
    this.sliderVal = this.sliderValue["value"];
    if(this.sliderVal == '""'){
      this.sliderVal = 0 + " ft " + 0 + " in";
    }
    else{
      this.conversion(this.sliderVal);
    }

    this.sliderControl = new FormControl(this.sliderValue["value"], Validators.required);

  }

}
