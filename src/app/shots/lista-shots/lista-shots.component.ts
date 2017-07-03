import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ShotsService } from './../shots.service';
import { Shots } from './../shots';


@Component({
  selector: 'app-lista-shots',
  templateUrl: './lista-shots.component.html',
  styleUrls: ['./lista-shots.component.css']
})
export class ListaShotsComponent implements OnInit, OnDestroy {

  listaDeShots: any;
  errorMessage: any;
  shotsTeste: Subscription;

  constructor(private shotsService: ShotsService) {}

  ngOnInit() {

    this.shotsTeste = this.shotsService.getShots()
    .subscribe( 
        listaDeShots => this.listaDeShots = listaDeShots,
        error => this.errorMessage = <any>error
      );

      console.log( this.listaDeShots )

  }
  

   ngOnDestroy() {

  }

}
