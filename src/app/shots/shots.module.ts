import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaShotsComponent } from './lista-shots/lista-shots.component';
import { ShotComponent } from  './shot/shot.component';
import { ShotsRoutingModule } from './shots.routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ShotsRoutingModule,
    FormsModule
  ],
  declarations: [ListaShotsComponent, ShotComponent]
})
export class ShotsModule { }
