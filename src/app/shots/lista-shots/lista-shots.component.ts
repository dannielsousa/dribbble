import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { ShotsService } from './../shots.service';
import { Shots } from './../shots';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-lista-shots',
  templateUrl: './lista-shots.component.html',
  styleUrls: ['./lista-shots.component.css']
  
})
export class ListaShotsComponent implements OnInit, OnDestroy {
 
 
  listaDeShots: any;
  errorMessage: any;
  shotsTeste: Subscription;

  constructor(
    private shotsService: ShotsService,
    private router: Router
  ) {}

  ngOnInit() {

    this.shotsTeste = this.shotsService.getShots()
    .subscribe( 
        listaDeShots => this.listaDeShots = listaDeShots,
        error => this.errorMessage = <any>error
      );
      console.log(this.listaDeShots);
  }

   ngOnDestroy() {
     this.shotsTeste.unsubscribe();

  }

}
