import { Component, ViewChild } from '@angular/core';

import { AnimationType } from './sections/carousel/carousel.animations';
import { CarouselComponent } from './sections/carousel/carousel.component';
import { Slide } from './sections/carousel/carousel.interface';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'plataforma';
  @ViewChild(CarouselComponent) carousel: CarouselComponent;

  animationType = AnimationType.Scale;

  animationTypes = [
    {  name: 'Scale', value: AnimationType.Scale },
    {  name: 'Fade', value: AnimationType.Fade },
    {  name: 'Flip', value: AnimationType.Flip },
    {  name: 'Crazy', value: AnimationType.JackInTheBox }
  ];
  slides: Slide[] = [
    {
      headline: 'For Your Current Mood',
      src:
        'https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'
    },
    {
      headline: 'Miouw',
      src:
        'https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80'
    },
    {
      headline: 'In The Wilderness',
      src:
        'https://images.unsplash.com/photo-1557800634-7bf3c7305596?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2001&q=80'
    },
    {
      headline: 'Focus On The Writing',
      src:
        'https://images.unsplash.com/photo-1551410224-699683e15636?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80'
    }
  ];
  setAnimationType({ value }): void {
    this.animationType = value;
    setTimeout(() => {
      this.carousel.onNextClick();
    });
  }
}
