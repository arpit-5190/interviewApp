import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  //Define json server api url
  public url ="http://localhost:3000/interviews";

  //Define updated url
  public updatedUrl:any;

  //Define a method which will return updated url with interviewer ID
  public initialize = (interviewId:any) => {
    this.updatedUrl = this.url + interviewId;
    return this.updatedUrl;
  }

  constructor(private httpClient: HttpClient) { }

  //Define a method which is used to get an interview information
  public sendGetRequest = ():Observable<any> => {
    return this.httpClient.get(this.updatedUrl);
  }
}
