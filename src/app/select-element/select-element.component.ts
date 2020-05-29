import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-select-element',
  templateUrl: './select-element.component.html',
  styleUrls: ['./select-element.component.scss']
})
export class SelectElementComponent implements OnInit {

  //Define an Input variable which is used to communicate with parent component
  @Input() dummySelectData:any;

  //Define formcontrol which will be used for reactive form validation
  selectControl = new FormControl('', Validators.required);

  constructor() { }

  ngOnInit() {
  }

}
