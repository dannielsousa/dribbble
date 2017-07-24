import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { ShotsService } from './../shots.service';
import { Shots } from './../shots';



@Component({
  selector: 'app-lista-shots',
  templateUrl: './lista-shots.component.html',
  styleUrls: ['./lista-shots.component.scss']
  
})
export class ListaShotsComponent implements OnInit {
 
 
  listaDeShots: any;
  errorMessage: any;

  constructor(
    private shotsService: ShotsService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {

    this.carregaShot();

  }

  carregaShot() { 
    this.shotsService.getShots()
    .subscribe( 
        listaDeShots => this.listaDeShots = listaDeShots,
        error => this.errorMessage = <any>error
      );

  }

  gotoDetail(teste: String): void {
    let link = ['/buscaShots', teste];
    this.router.navigate(link);
  }
  
  goBack(): void {
    this.location.back();
  }
}
