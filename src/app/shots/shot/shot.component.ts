import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Location } from '@angular/common';
import { ShotsService } from './../shots.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


@Component({
  selector: 'app-shot',
  templateUrl: './shot.component.html',
  styleUrls: ['./shot.component.scss']
})
export class ShotComponent implements OnInit {

  shotSelect: any;
  errorMessage: any;
  shotEncontrado: any;
  encontrado: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private shotsService: ShotsService,
    private http: Http
  ) { }

  ngOnInit(): void {

  }

  buscarShot() {
    this.shotsService.getOneShot(this.shotSelect)
      .subscribe(
      shotEncontrado => this.shotEncontrado = shotEncontrado,
      error => this.errorMessage = <any>error,
      );
    this.encontrado = true;
  }

  limpaCampo() {
    this.encontrado = false;
    this.errorMessage = null;
    this.shotSelect = null;
    this.shotEncontrado = null;
  }
}

