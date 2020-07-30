import { Router } from '@angular/router';
import { RestApiService } from './../rest-api.service';
import { Component, OnInit, Input } from '@angular/core';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-middle-content',
  templateUrl: './middle-content.component.html',
  styleUrls: ['./middle-content.component.scss'],
  providers: [
    //{provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}}
  ]
})
export class MiddleContentComponent implements OnInit {

  //snackbar position
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  //Define Input property for get data from parent App component
  @Input() dummyCategoryData:any;

  //Define public property which just store data for intercept.
  public dummyVal = this.dummyCategoryData;
  public deviceWidth: number;
  public elementName:any;

  verticalFormGroup: FormGroup;


  constructor(private _formBuilder: FormBuilder,private router:Router,private _snackBar: MatSnackBar, private httpService:RestApiService) { }

  ngOnInit():void {
    this.verticalFormGroup = this._formBuilder.group({
      //verticalCtrl: ['', Validators.required]
    });

    this.deviceWidth = window.innerWidth;
  }

  //Define an object which is used to pass the ddata to put method
  postObj = {};

  //Define an interview status property which will check answer values
  interviewStatus:string;

  //Define answers array which stores all answers in boolean format
  answers:any;


  //This event is used to dubmit section information to local JSON server and perform POST operation
  onFormSubmit = () => {
    console.log("Section Data", this.dummyCategoryData);

    this.httpService.sendGetRequest()
      .subscribe(
        (data:any[]) => {

          console.log("Main Data", data);
          
          //Call this method to add answer to json data
          this.updateValue(data);

          console.log("Updated Data", data);

          //assign updated data to a public property
          this.postObj = data;
          
          //this local variable is used to check answer for question before change status
          let checkAnswer = this.answers.indexOf("true") > -1;

          if(checkAnswer && this.postObj["interviewStatus"] === "Sent"){
            this.postObj["interviewStatus"] = "In Progress";
           // this.postObj["interviewStatus"] = this.formatValue(this.postObj["interviewStatus"]);
          }

          console.log("check answer value", checkAnswer);
          console.log("Interview status from formsubmit", this.postObj["interviewStatus"]);

          this.httpService.updateInterview(data).subscribe(
            (data1)=> {
              console.log("Put operation data", data1);
            },
            (error:any) => {
              console.log("Error message", error)
            }
          )
        }
      )
  }

  //Submit button event which will check for question's answers and return snackbar and perform put operation
  onSubmit = () => {
    console.log("Section Data", this.dummyCategoryData);

    this.httpService.sendGetRequest()
      .subscribe(
        (data:any[]) => {
          
          //Call this method to add answer to json data
          this.updateValue(data);

          //assign updated data to a public property
          this.postObj = data;

          //Define a local variable which will check answers array and return true for updated answer and false for empty answer
          let intStatus = this.answers.every((val, i, arr) => val === "true");

          //condition for display snackbar and if true then perform put and return confirmation snackbar
          if(intStatus){
            this.httpService.updateInterview(this.postObj)
              .subscribe(
                (data1) => {
                  console.log("Put operation done successfully and update answers", data1);
                },
                (error:any)=>{
                  console.log("Error Message", error)
                }
              )
              //Return confirmation snackbar
              this.openConfirmationMessage();
          }
          //If false then return error message snackbar
          else{
            this.openGenericMessage();
          }


          
        }
      )
  }


  //This function will update question answer and return
  public updateValue = (value) => {
    this.answers = [];
    for(let section of value.interview.sections){
      for(let question of section.questionInputs){

          //Define condition for checkbox
          if(question.input.type === "checkbox"){
            question.answer = "";
            for(let checkList of question.input.selectOptions){
              for(let formList of this.formValues){
                if(checkList.label === formList.label){
                  checkList.value = '"' + formList.value + '"';
                }
              }

              //set answer for chekbox
              if(checkList.value == true || checkList.value == '"true"' || checkList.value == "true"){
                checkList.label = checkList.label.includes('"') ? checkList.label.substring(1, checkList.label.length-1) : checkList.label
                question.answer = question.answer == "" ? checkList.label : (question.answer + "," + checkList.label);
              }
            }
          }
        for(let formval of this.formValues){
          if(question.question.text === formval.label){
            question.answer = formval.value;
          }
        }

        //Condition to check for answer value and then push to true or false to answers array based on answers
        if(question.answer !== '""' && question.answer !== '' && question.answer !='"0'){
          this.interviewStatus = "true";
        }
        else{
          this.interviewStatus = "false";
        }

        this.answers.push(this.interviewStatus);

        //Update question text label and answer properties for POST method
        question.question.text = question.question.text.includes('"') ? question.question.text.substring(1, question.question.text.length-1) : question.question.text;
        question.answer = question.answer.includes('"') ? question.answer.substring(1, question.answer.length-1) : question.answer;

        //Define for loop for formatting select options
        for(let selection of question.input.selectOptions){
          selection.label = selection.label.includes('"') ? selection.label.substring(1, selection.label.length-1) : selection.label;
          selection.value = selection.value.includes('"') ? selection.value.substring(1, selection.value.length-1) : selection.value;
          
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

  //Confirmation snackbar which shows review and shubmit button
  openConfirmationMessage(){
    this._snackBar.openFromComponent(DisplayReviewComponent, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass:['purple-snackbar'],
    });
  }

  //Generic Error Message Snack bar
  openGenericMessage(){
    this._snackBar.openFromComponent(DisplayErrorMessageComponent,{
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['purple-snackbar']
    });
  }

}


//**************************Define component for confirmation message snack bar*********************** */
@Component({
  selector: 'snack-bar-component-snack',
  templateUrl: 'snack-bar-component-snack.html',
  styles:[],
})

export class DisplayReviewComponent {
  
  //Define constructor properties for router
  constructor(private router:Router, private _snackBar:MatSnackBar, private httpService:RestApiService){}

  //Define property for client ID and from url
  public clientId;

  //Define property to store interview information
  public values;

  //Define an object which used to pass data to POST method
  postObj = {};

  updateData = (value) => {

    value.client.firstName = value.client.firstName.includes('"') ? value.client.firstName.substring(1, value.client.firstName.length-1) : value.client.firstName;
    value.client.lastName = value.client.lastName.includes('"') ? value.client.lastName.substring(1, value.client.lastName.length-1) : value.client.lastName;
  
    //create local varaible to store applicant fullname
    let fullname = value.client["firstName"] + " " + value.client["lastName"];
    
    //Format email address
    value.client.email = value.client.email.includes('"') ? value.client.email.substring(1, value.client.email.length-1) : value.client.email;
    value.client.firstName = value.client.firstName.includes('"') ? value.client.firstName.substring(1, value.client.firstName.length-1) : value.client.firstName;
    value.client.lastName = value.client.lastName.includes('"') ? value.client.lastName.substring(1, value.client.lastName.length-1) : value.client.lastName;
    value.interviewStatus = value.interviewStatus.includes('"') ? value.interviewStatus.substring(1, value.interviewStatus.length-1) : value.interviewStatus;
    
    //Define loop to structure the section and question input
    for(var section of value.interview.sections){

      //Update section properties
      section.displayText = section.displayText.includes('"') ? section.displayText.substring(1, section.displayText.length-1) : section.displayText;
      section.description = section.description.includes('"') ? section.description.substring(1, section.description.length-1) : section.description;

      for(let question of section.questionInputs){
        question.input.placeholderValue = question.input.placeholderValue.includes('"') ? question.input.placeholderValue.substring(1, question.input.placeholderValue.length-1) : question.input.placeholderValue;
        question.input.requiredErrorMsg = question.input.requiredErrorMsg.includes('"') ? question.input.requiredErrorMsg.substring(1, question.input.requiredErrorMsg.length-1) : question.input.requiredErrorMsg;

        question.question.text = question.question.text.includes('"') ? question.question.text.substring(1, question.question.text.length-1) : question.question.text;
        question.answer = question.answer.includes('"') ? question.answer.substring(1, question.answer.length-1) : question.answer;

        for(let selection of question.input.selectOptions){
          selection.label = selection.label.includes('"') ? selection.label.substring(1, selection.label.length-1) : selection.label;
          selection.value = selection.value.includes('"') ? selection.value.substring(1, selection.value.length-1) : selection.value;          
  
        }
      }
      
    
    }
  
  }

  //Snackbar submit button event
  onProceed = () =>{
    //Create a new string which return only clienId from url
    this.clientId = '/' + this.clientId.substring(this.clientId.indexOf('%2F')+3);

    //Call rest api service to update api url
    this.httpService.initialize(this.clientId);

    this.httpService.sendGetRequest()
      .subscribe(
        (data:any[]) => {
          console.log("get data form API", data);

          this.updateData(data);

          this.postObj = data;

          this.postObj["interviewStatus"] = "Submitted";

          //Call Put method to update interview
          this.httpService.updateInterview(this.postObj)
            .subscribe(
              (data1)=>{
                console.log("PUT operation done successfully", data1);
              },
              (error:any) => {
                console.log("Error Message", error)
              }
            )


        }
      )

      //close snackbar
      this._snackBar.dismiss();

      //Redirect to the interview summary page
      //this.router.navigate(['interview-summary', this.clientId], {skipLocationChange:true})
  }

  //Snackbar Review button
  onReview = () => {
    this._snackBar.dismiss();
  }
}

//*************************End component fot confirmation message snack bar *******************************/

//***************************Define component for Generic Error Message Snack bar************************* */

@Component({
  selector: 'snack-bar-generic-message-component-snack',
  templateUrl: 'snack-bar-generic-message-component-snack.html',
  styles:[],
})

export class DisplayErrorMessageComponent {

  constructor(private _snackBar: MatSnackBar){}

  //Snackbar Review button
  onReview = () => {
    this._snackBar.dismiss();
  }
}
//*************************End component fot Generic Error message snack bar *******************************/
