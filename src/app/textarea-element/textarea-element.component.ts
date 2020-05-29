import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-textarea-element',
  templateUrl: './textarea-element.component.html',
  styleUrls: ['./textarea-element.component.scss']
})

export class TextareaElementComponent implements OnInit {

  //Define Input variable which is used to get data from parent app component to child component
  @Input() dummyTextAreaData:any;

  //Define a form control instance which will be used for validation
  textareaControl = new FormControl('', Validators.required);
  constructor() { }

  ngOnInit() {
  }

}
