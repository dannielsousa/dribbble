import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Shots } from './shots';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class ShotsService {

  url = 'https://api.dribbble.com/v1/shots?access_token=6e1c591eca8f4f774fb937c575c3eab5f9c0db768511c0590d046cb00d848aa6';

  api = 'https://api.dribbble.com/v1/shots/';
  token = 'access_token=6e1c591eca8f4f774fb937c575c3eab5f9c0db768511c0590d046cb00d848aa6';

  private headers: Headers;
  private options: RequestOptions;

  getOneShot(idShot): Observable<any[]> {
    return this.http.get(this.api + idShot + '?' + this.token)
    .map(this.extractData)
    .catch(this.handleError)
  }

  getShots(): Observable<any[]> {
    return this.http.get(this.url)
    .map(this.extractData)
    .catch(this.handleError)
  }

  private extractData(res: Response) {
    return res.json() || [];
  }
 
  
    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }
 

  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
   }

}