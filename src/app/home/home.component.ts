import { Component, OnInit } from '@angular/core';
import { ShotComponent } from './../shots/shot/shot.component';
import { ShotsService } from './../shots/shots.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listaDeShots: any;
  errorMessage: any;
  
  constructor(
    private shotsService: ShotsService,
  ) { }

  ngOnInit() {
  }

  vai(teste: String): void {
    
  }

  carregaShot() { 
    this.shotsService.getShots()
    .subscribe( 
        listaDeShots => this.listaDeShots = listaDeShots,
        error => this.errorMessage = <any>error
      );

  }


}
