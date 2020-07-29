import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap,map, catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {


  headers = new HttpHeaders().set('Content-Type','application/json').set('Accept','application/json');
  httpOptions = { headers:this.headers}


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

  private handleError(error:any){
    console.log(error);
    return throwError(error);
  }


  //Define a method which is used to get an interview information
  public sendGetRequest = ():Observable<any> => {
    return this.httpClient.get(this.updatedUrl)
    .pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  public submitData = (obj):Observable<any> => {
    return this.httpClient.post(this.updatedUrl,obj);
  }

  //Define a post method which is used to update the answer of the questions
  public submitPostRequest = (section) => {
    return this.httpClient.post(this.updatedUrl,section);
  }

  save(interview):Observable<any>{
    console.log("Passing post object", interview);
    return this.httpClient.post(this.url, interview, this.httpOptions).pipe(catchError(this.handleError))
  }

  updateInterview(user){
    return this.httpClient.put(this.updatedUrl,user,this.httpOptions)
      .pipe(
        map(()=> user),
        catchError(this.handleError)
      );
  }

  /*addPerson(interview:Interviewer):Observable<any> {
    const headers = { 'content-type' : 'application/json'}
    const body = JSON.stringify(interview);
    console.log(body);
    return this.httpClient.post(this.updatedUrl, body, {'headers':headers})
  }*/

}
