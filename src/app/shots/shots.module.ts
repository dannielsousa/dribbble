import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShotComponent } from './shot/shot.component';
import { ListaShotsComponent } from './lista-shots/lista-shots.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ShotComponent, ListaShotsComponent]
})
export class ShotsModule { }
