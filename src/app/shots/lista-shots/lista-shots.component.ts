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

  shots: Promise<Shots[]>;
  listashots: Observable<Shots[]>;
  testeShot: any[];


  constructor(private shotService: ShotsService) {
    //this.shotService = shotService; 
    //this.shots =shotService.getShots();
    //this.listashots =  this.shotService.getAllShots();
  console.log(this.shotService.getAllShots2()
                   .subscribe(
                     testeShot => this.testeShot = testeShot));

   }

  ngOnInit() {
    this.listashots =  this.shotService.getAllShots();
      //.subscribe(listashots => this.shotService.initData())
  }
}
