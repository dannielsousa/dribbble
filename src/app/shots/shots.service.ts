import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, HttpModule, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Shots } from './shots';

@Injectable()
export class ShotsService {

  listaDeShots: any;
  lshots: any[];
  headers: { 'X-Requested-With': 'XMLHttpRequest' }

  constructor(private http: Http) { }


  getShots(): Promise<Shots[]> {

    var url = 'http://api.dribbble.com/v1/shots?access_token=2b1bda62785d323950b3a26829122a217d440ae6ddc931879f8fae57feb7d9a7';

    this.listaDeShots = this.http.get(url)
      .toPromise()
      .then(response => response.json().data)
    return this.listaDeShots;
  }


  getAllShots() {
    var url = 'http://api.dribbble.com/v1/shots?access_token=2b1bda62785d323950b3a26829122a217d440ae6ddc931879f8fae57feb7d9a7';

    return this.http.get(url)
      .map((res: Response) => res.json().results)
      .do((data) => { this.lshots = data; })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getAllShots2() {
    var url = 'http://api.dribbble.com/v1/shots?access_token=2b1bda62785d323950b3a26829122a217d440ae6ddc931879f8fae57feb7d9a7';
     return this.http.get(url)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
