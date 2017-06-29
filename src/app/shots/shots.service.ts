import { Injectable } from '@angular/core';

@Injectable()
export class ShotsService {

  listaDeShots: any[];

  getShots() {
    return this.listaDeShots;
  }
  
  constructor() { 

    this.listaDeShots = [

      {id: 1, img: 'https://cdn.dribbble.com/users/631430/screenshots/3613742/be.gif'},
      {id: 2, img: 'https://cdn.dribbble.com/users/585295/screenshots/3605263/2-scene1.gif'},
      {id: 3, img: 'https://cdn.dribbble.com/users/218750/screenshots/3614025/girl.png'},
      {id: 4, img: 'https://cdn.dribbble.com/users/997070/screenshots/3613687/best_emploiyee1.png'},
      {id: 5, img: 'https://cdn.dribbble.com/users/952958/screenshots/3614389/style-dribbble.png'}
    ];
  }

}
