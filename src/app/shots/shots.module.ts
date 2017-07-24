import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaShotsComponent } from './lista-shots/lista-shots.component';
import { ShotComponent } from  './shot/shot.component';
import { ShotsRoutingModule } from './shots.routing.module';
import { FormsModule } from '@angular/forms';
import { BuscaShotsComponent } from './busca-shots/busca-shots.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ShotsRoutingModule
  ],
  declarations: [ListaShotsComponent, ShotComponent, BuscaShotsComponent]
})
export class ShotsModule { }
