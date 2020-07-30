import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox-element',
  templateUrl: './checkbox-element.component.html',
  styleUrls: ['./checkbox-element.component.scss']
})

export class CheckboxElementComponent implements OnInit {


  //Define Input variable which is used to get data from parent App component to child component
  @Input() dummyCheckboxData:any;

  
  //Define Output variable to pass the value of question to middle component
  @Output() public onCheckboxChange = new EventEmitter();

  //Define property to store checkbox value
  checkValue:any = {};

  lastAction:string;
  disabledStatus;

  //Define an event which is called while checkbox field will change value
  onChange(event, index, item){

    item.checked = !item.checked;

    if(item.value == true || item.value == "true"){
      item.value = false;
    }
    else{
      item.value = true;
    }

    //Call this function to disable none option
    this.disableNone();

    this.onCheckboxChange.emit(item);
  }

  //Define the method to enable or disable none button
  disableNone = () => {
    for(let option of this.dummyCheckboxData.input.selectOptions){
      if(option.label != 'None' && (option.value == true || option.value == "true")){
        this.dummyCheckboxData.input.selectOptions[this.dummyCheckboxData.input.selectOptions.length-1].checked = false;
        this.dummyCheckboxData.input.selectOptions[this.dummyCheckboxData.input.selectOptions.length-1].value = "false";
        this.dummyCheckboxData.input.selectOptions[this.dummyCheckboxData.input.selectOptions.length-1].disable = true;
        break;
      }
      else{
        this.dummyCheckboxData.input.selectOptions[this.dummyCheckboxData.input.selectOptions.length-1].disable = false;
      }
    }
  }
  constructor() { }

  ngOnInit() {
    this.disableNone();
  }

}
