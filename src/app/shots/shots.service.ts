import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Shots } from './shots';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class ShotsService {

  api = 'https://api.dribbble.com/v1/'
  token =  'access_token=2b1bda62785d323950b3a26829122a217d440ae6ddc931879f8fae57feb7d9a7' 
  url = 'https://api.dribbble.com/v1/shots?access_token=2b1bda62785d323950b3a26829122a217d440ae6ddc931879f8fae57feb7d9a7';
  shotid : any;
  private headers: Headers;
  private options: RequestOptions;

  getShots(): Observable<any[]> {
    return this.http.get(this.api + 'shots?' + this.token)
    .map(this.extractData)
    .catch(this.handleError)
  }
  
  getOneShot(shotid) {
    return this.http.get(this.api + 'shots/' + shotid + '?' + this.token)
    .map(this.extractData)
    .catch(this.handleError)
  }
  private extractData(res: Response) {
    return res.json() || [];
  }
 
  private handleError(error: Response | any) {
    let errMsg = (error['_body']) ? JSON.parse(error['_body']).msg : 'Server error';
    return Observable.throw(errMsg);
  }
 
  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
   }

}