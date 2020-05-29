import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-radio-element',
  templateUrl: './radio-element.component.html',
  styleUrls: ['./radio-element.component.scss']
})

export class RadioElementComponent implements OnInit {

  //Define Input variable which will communicate from parent app component to child component
  @Input() dummyRadioData:any;
  
  constructor() { }

  ngOnInit() {
  }

}
