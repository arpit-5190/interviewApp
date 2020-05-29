import { RestApiService } from './../rest-api.service';
import { Component, OnInit, Input } from '@angular/core';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-middle-content',
  templateUrl: './middle-content.component.html',
  styleUrls: ['./middle-content.component.scss'],
  providers: [
    {provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}}
  ]
})
export class MiddleContentComponent implements OnInit {

  //Define Input property for get data from parent App component
  @Input() dummyCategoryData:any;

  //Define public property which just store data for intercept.
  public dummyVal = this.dummyCategoryData;
  public deviceWidth: number;
  public elementName:any;

  isLinear = false;
  verticalFormGroup: FormGroup;

  reachTop = (event:any) => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop =0;
  }

  constructor(private _formBuilder: FormBuilder, private httpService:RestApiService) { }

  ngOnInit():void {
    this.verticalFormGroup = this._formBuilder.group({
      verticalCtrl: ['', Validators.required]
    });

    this.deviceWidth = window.innerWidth;
  }

}
