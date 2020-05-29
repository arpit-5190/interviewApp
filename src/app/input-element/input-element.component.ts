import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-element',
  templateUrl: './input-element.component.html',
  styleUrls: ['./input-element.component.scss']
})

export class InputElementComponent implements OnInit {

  @Input() dummyInputData:any;

  inputNumberControl = new FormControl('', Validators.required);
  inputTextControl;

  constructor() { }

  ngOnInit(): void {
    
    //This condition will check for different error message and then create form control instance
    if('emailErrorMsg' in this.dummyInputData.input){
      this.inputTextControl = new FormControl('',[Validators.required, Validators.email]);
    }
    else{
      this.inputTextControl = new FormControl('',Validators.required);
    }
  }

}
