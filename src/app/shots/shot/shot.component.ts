import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { ShotsService } from './../shots.service';
import { Shots } from './../shots';


@Component({
  selector: 'app-shot',
  templateUrl: './shot.component.html',
  styleUrls: ['./shot.component.css']
})
export class ShotComponent implements OnInit {


  shotid: any;
  shot: any;
  errorMessage: any;
  
  constructor(
      private router: Router,
      private shotService: ShotsService
  ) {

   }
  
  ngOnInit(): void {
       
  }

  buscaShot() {

  

    this.shotService.getOneShot(this.shotid)
      .subscribe(
        shot => this.shot = shot,
        error => this.errorMessage = <any>error
      )
  }
}