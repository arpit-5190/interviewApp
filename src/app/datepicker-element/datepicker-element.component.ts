import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-datepicker-element',
  templateUrl: './datepicker-element.component.html',
  styleUrls: ['./datepicker-element.component.scss']
})

export class DatepickerElementComponent implements OnInit {

  //Define an Input variable which is used to navigate data from parent app component to child component
  @Input() dummyDatapickerData:any;
  constructor() { }

  ngOnInit() {
  }

}
