import { RestApiService } from './../rest-api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body-content',
  templateUrl: './body-content.component.html',
  styleUrls: ['./body-content.component.scss'],
  providers:[
    RestApiService
  ]
})
export class BodyContentComponent implements OnInit {

  title = "InterviewApp";

  public href:string ="";

  //Define public properties for store section information
  public sectionsData:any;
  public restAPIData:any;
  public clientInfo:any;

  //This property will contain updated data after performing an operation
  public updatedData = [];


  constructor(private restapi:RestApiService, private router: Router) { }

  ngOnInit(): void {

    //store information url after localhost which will contain inteview ID
    this.href = this.router.url;
    console.log("HREF value", this.href);

    //Call Rest API service method to update api url
    this.restapi.initialize(this.href);

    //subscribe rest api service method to retrieve the interview data
    this.restapi
      .sendGetRequest()
      .subscribe(
        (data:any[]) => {
          //Retrieve Interview Personal Information
          this.clientInfo = this.getClientName(data);

          //Retrieve Interviewer Interview Information
          this.sectionsData = this.getData(data);
        }
      )
  }

  //Define functions which will return Interviewer personal information
  public getClientName = (value:any) => {
    return value.client.lastName + " " + value.client.firstName;
  }

  //Define function which will return interview section and question information with sorted data
  public getData = (value:any) => {
    for(let section of value.interview.section){
      this.updatedData[section.order] = section;
      section.questionInputs.sort(
        function(a:any, b:any){
          return a.order - b.order;
        }
      );
    }

    return this.updatedData;
  }

}
