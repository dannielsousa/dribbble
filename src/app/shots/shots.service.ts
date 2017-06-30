import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, HttpModule, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Shots } from './shots';

@Injectable()
export class ShotsService {

  listaDeShots: any[];
  lshots: any[];
  rdata = [];
  url = 'https://api.dribbble.com/v1/shots?access_token=2b1bda62785d323950b3a26829122a217d440ae6ddc931879f8fae57feb7d9a7';
  constructor(private http: Http) { }

  getshots(){
    this.http.get('https://api.dribbble.com/v1/shots?access_token=2b1bda62785d323950b3a26829122a217d440ae6ddc931879f8fae57feb7d9a7')
      .map((res: Response) => res.json())
      .subscribe(
        data => {this.rdata = data},
        err => console.error(err),
        () => console.log(this.rdata)

      );
  }

  getAllShots() {
     return this.http.get(this.url)
        .map((res: Response) => res.json().results)
        .do((data) => { this.listaDeShots = data; })
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}