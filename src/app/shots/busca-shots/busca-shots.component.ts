import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Location } from '@angular/common';
import { ShotsService } from './../shots.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


@Component({
  selector: 'app-busca-shots',
  templateUrl: './busca-shots.component.html',
  styleUrls: ['./busca-shots.component.scss']
})
export class BuscaShotsComponent implements OnInit {


  shotSelect: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private shotsService: ShotsService,
    private http: Http
  ) { }

  ngOnInit(): void {

  }

  gotoDet(): void {
    this.router.navigate(['shots/buscaShots/', this.shotSelect]);
  }
 
  goBack(): void {
    this.location.back();
  }
}
