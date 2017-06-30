import { Component, OnInit } from '@angular/core';
import { ShotsService } from './../shots.service';
import { Shots } from './../shots';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-lista-shots',
  templateUrl: './lista-shots.component.html',
  styleUrls: ['./lista-shots.component.css']
})
export class ListaShotsComponent implements OnInit {

  listashots: any;
  tamanho: any;
  shotsList: any[] = [];

  constructor(private shotService: ShotsService) {
    //this.listashots = shotService.getAllShots();
    //console.log(this.listashots);
    ///this.tamanho = this.listashots
  }
    //this.shotService = shotService; 
    //this.shots =shotService.getShots();
    //this.listashots =  this.shotService.getAllShots();
  /*console.log(this.shotService.getAllShots2()
                   .subscribe(
                     testeShot => this.testeShot = testeShot));

   }*/

  ngOnInit() {
    //this.listashots =  this.shotService.getAllShots();
      //.subscribe(listashots => this.shotService.initData())
      //this.testeShot = ShotsService.ge
      //this.shotService.getAllShots()
      //.subscribe(shotsList => {
      //  this.shotsList = shotsList;
      //})
      //console.log(this.shotsList);
    this.listashots = this.shotService.getshots();

  }
}
