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
      //verticalCtrl: ['', Validators.required]
    });

    this.deviceWidth = window.innerWidth;
  }

  postObj = {};

  //This event is used to dubmit section information to local JSON server and perform POST operation
  onFormSubmit = () => {
    console.log("Section Data", this.dummyCategoryData);

    this.httpService.sendGetRequest()
      .subscribe(
        (data:any[]) => {
          console.log("Main Data", data);
          this.updateValue(data);
          console.log("Updated Data", data);

          this.postObj = data;
          /*this.httpService.save(this.postObj).subscribe(
            (data1) => {
              console.log("Post data operation", data1)
            },
            (error:any) => console.log(error)
          )*/

          this.httpService.updateInterview(data).subscribe(
            data1=> {
              console.log("Put operation data");
            }
          )
        }
      )
  }


  //This function will update question answer and return
  public updateValue = (value) => {
    for(let section of value.interview.sections){
      for(let question of section.questionInputs){
        for(let formval of this.formValues){
          if(question.question.text === formval.label){
            question.answer = formval.value;
          }
        }
      }
    }
  }
  //Create a global array variable to store all the question answer for section
  public formValues = [];

  public getAnswer(e):void {
    this.formValues.push(e);

    //Remove duplicates from the array object
    this.formValues = this.formValues.filter((item,index)=>{
      console.log("Item number", item);
      console.log("Item number index", index);
      return this.formValues.indexOf(item) === index;
    })

    console.log("Get data from Input Element", e);
    console.log("Form Data Values", this.formValues);
  }

}
