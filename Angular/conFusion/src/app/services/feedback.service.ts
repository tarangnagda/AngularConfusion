import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { Feedback } from '../shared/feedback';

import { ProcessHTTPMsgService } from './process-httpmsg.service';
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient, private processHTTPMsgService: ProcessHTTPMsgService) { }


 // putDish(feedback: Feedback): Observable<Feedback> {
   // const httpOptions = {
     // headers: new HttpHeaders({
       // 'Content-Type': 'application/json'
      //})
    //};
    //return this.http.put<Feedback>(baseURL + 'dishes/' + 'feedback', feedback, httpOptions)
      //.pipe(catchError(this.processHTTPMsgService.handleError));

  //}



  submitFeedback(feedback: Feedback): Observable<Feedback> {

    const httpOptions = {
     headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<Feedback>(baseURL + 'feedback', feedback, httpOptions)
      .pipe(
        catchError(this.processHTTPMsgService.handleError), delay(2000)
      );
  }

}
