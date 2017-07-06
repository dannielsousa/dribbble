import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule }    from '@angular/http';

import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { ShotsService } from './shots/shots.service';

import { ModalComponent } from './modal/modal.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModalComponent
  ],
  imports: [
    AppRoutingModule,
    CarouselModule.forRoot(),
    BrowserModule,
    HttpModule,
    JsonpModule 
  ],
  providers: [ShotsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
