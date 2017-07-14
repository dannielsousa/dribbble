import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpModule, JsonpModule }    from '@angular/http';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HomeComponent } from './home/home.component';
import { ModalComponent } from './modal/modal.component';
import { ShotsService } from './shots/shots.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModalComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CarouselModule.forRoot(),
    FormsModule,
    HttpModule,
    JsonpModule 
  ],
  providers: [ShotsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
