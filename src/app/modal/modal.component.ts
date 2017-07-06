import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-modal', //demo-carousel-dynamic
  templateUrl: './modal.component.html', //./dynamic.html
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit {


  ngOnInit() {
  }

  public slides: any[] = [];
  public activeSlideIndex: number;
  public noWrapSlides: boolean = false;
  activeSlide: number;
  interval: number = 5000;
  noPause: boolean = true;
  noWrap: boolean = false;

  public constructor() {
    for (let i = 0; i < 4; i++) {
      this.addSlide();
    }
  }

  public addSlide(): void {
    this.slides.push({
      image: `assets/images/nature/${this.slides.length % 8 + 1}.jpg`
    });
  }

  public removeSlide(index?: number): void {
    const toRemove = index ? index : this.activeSlideIndex;
    this.slides.splice(toRemove, 1);
  }

}
