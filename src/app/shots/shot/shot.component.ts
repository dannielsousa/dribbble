import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';


@Component({
  selector: 'app-shot',
  templateUrl: './shot.component.html',
  styleUrls: ['./shot.component.css']
})
export class ShotComponent implements OnInit {

  teste: any;
  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }
  
  ngOnInit(): void {

    this.teste = this.route.params.forEach((params: ParamMap) => {
    let id = +params['teste'];
       
    })

    
  }
}