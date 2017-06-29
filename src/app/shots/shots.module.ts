import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaShotsComponent } from './lista-shots/lista-shots.component';
import { ShotsRoutingModule } from './shots.routing.module';

@NgModule({
  imports: [
    CommonModule,
    ShotsRoutingModule
  ],
  declarations: [ListaShotsComponent]
})
export class ShotsModule { }
