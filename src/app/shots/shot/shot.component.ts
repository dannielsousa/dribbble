import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ShotsService } from './../shots.service';

@Component({
  selector: 'app-shot',
  templateUrl: './shot.component.html',
  styleUrls: ['./shot.component.css']
})
export class ShotComponent implements OnInit {

  shotSelect: any;
  errorMessage: any;
  
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private shotsService: ShotsService

  ) { }
  
  ngOnInit(): void { 
    
  }

  buscarShot() {
     this.shotsService.getOneShot(this.shotSelect)
    .subscribe( 
        shotSelect => this.shotSelect = shotSelect,
        error => this.errorMessage = <any>error
      );

  }

}

    