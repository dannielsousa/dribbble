import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { ShotsService } from './../shots.service';
import { Shots } from './../shots';

@Component({
  selector: 'app-lista-shots',
  templateUrl: './lista-shots.component.html',
  styleUrls: ['./lista-shots.component.css']
  
})
export class ListaShotsComponent implements OnInit {
 
 
  listaDeShots: any;
  errorMessage: any;

  constructor(
    private shotsService: ShotsService,
    private router: Router
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
}
