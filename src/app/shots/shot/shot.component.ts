import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { ShotsService } from './../shots.service';

@Component({
  selector: 'app-shot',
  templateUrl: './shot.component.html',
  styleUrls: ['./shot.component.scss']
})
export class ShotComponent implements OnInit {

  getShot: Subscription;
  errorMessage: any;
  shotEncontrado: any;
  encontrado: boolean = false;
  tamanho: string = 'pequeno';
  pequeno: any = null;
  medio: any = null;
  grande: any = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private shotsService: ShotsService,
    private location: Location
  ) { }

  ngOnInit(): void {

    this.getShot = this.route.params.subscribe(
      (params: any) => {
        this.buscarShot(params['id']);
      }

    );

  }

  buscarShot(idShot: string): void {
    this.shotsService.getOneShot(idShot)
      .subscribe(
      shotEncontrado => this.shotEncontrado = shotEncontrado,
      error => this.errorMessage = <any>error,
      );
    this.encontrado = true;
  }

  voltar(): void {
    this.location.back();
  }

  change(val): void {
    this.tamanho = val;
  }
}

