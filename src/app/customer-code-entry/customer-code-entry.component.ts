import { RestApiService } from './../rest-api.service';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-code-entry',
  templateUrl: './customer-code-entry.component.html',
  styleUrls: ['./customer-code-entry.component.scss']
})
export class CustomerCodeEntryComponent implements OnInit {

  //Define public properties
  public clientId:string = "";

  //Define property to store client fullName
  public clientInfo:string;

  //Define property which will store customer code from API
  public customerCode;

  //Define property to store interview status
  public interviewStatus;

  //Define property to contain text for error message while enter wrong code
  public showErrorMsg;
  showOtpComponent;

  //Define an event which will trigger on last input box to validate customer code
  inputChange = (i1,i2,i3,i4,i5,i6):void => {
    //store customer input to local variable
    let finalVal = i1.value + i2.value + i3.value + i4.value + i5.value + i6.value;

    //customer input match with API customer code
    if(finalVal == this.customerCode){
      //Redirect to the Health and Lifestyle questionnaire
      this.router.navigate(["interview", this.clientId],{skipLocationChange:true})
    }
    //Clear all input boxes and show error message
    else{
      this.showErrorMsg = "Invalid Error Code Entered"
      i1.value = "";
      i2.value = "";
      i3.value = "";
      i4.value = "";
      i5.value = "";
      i6.value = "";
      i1.focus();
    }
  }

  //Define event only allowed to enter numbers to input boxes
  numberOnly(event):boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if(charCode > 31 && (charCode < 48 || charCode > 57)){
      return false;
    }
    return true;
  }

  //Define an event which will focus on next input box
  onInputEntry(event, nextInput){
    this.showErrorMsg = "";
    const input = event.target;
    const length = input.value.length;
    const maxLength = input.attributes.maxlength.value;

    if(length >= maxLength){
      nextInput.focus();
    }
  }


  constructor(private restservice: RestApiService, private router:Router) { }

  ngOnInit() {

    //Store information url after localhost which will contain interview ID
    this.clientId = this.router.url;

    //Call rest service method to update api url
    this.restservice.initialize(this.clientId);

    //Retrieve customer code
    /*this.restservice.retrieveCustomerCode(this.clientId)
      .subscribe(
        (data) => {
          this.customerCode = data;
        }
      )
        */

    //Retrieve Interview status to check what should display
    /*this.restservice.retrieveInterviewStatus(this.clientId)
        .subscribe(
          (data)=>{
            this.interviewStatus = data["interviewStatus"];
            
            if(this.interviewStatus == "complete"){
              this.showOtpComponent = false;
            }
            else{
              this.showOtpComponent = true;
            }
          }
        )
          */
    //Retrieve customer information
    this.restservice.sendGetRequest()
      .subscribe(
        (data:any[]) => {
          //Retrieve interview personal information
          this.clientInfo = this.getClientName(data);
        }
      )
  }

  //Define function which will return Interviewer personal information
  public getClientName = (value:any) => {
    return value.client.firstName + " " + value.client.lastName;
  }

}
