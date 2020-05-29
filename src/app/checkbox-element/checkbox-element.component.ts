import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox-element',
  templateUrl: './checkbox-element.component.html',
  styleUrls: ['./checkbox-element.component.scss']
})

export class CheckboxElementComponent implements OnInit {

  //Define Input variable which is used to get data from parent App component to child component
  @Input() dummyCheckboxData:any;
  
  constructor() { }

  ngOnInit() {
  }

}
