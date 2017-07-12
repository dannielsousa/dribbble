import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule } from '@angular/forms'
import { HomeComponent } from './home/home.component';
import { HttpModule, JsonpModule }    from '@angular/http';
import { ModalComponent } from './modal/modal.component';
import { NgModule } from '@angular/core';
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
