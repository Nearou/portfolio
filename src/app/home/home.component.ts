import { Component, OnInit } from '@angular/core';


declare var Swiper : any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  galleryTop:any;
  galleryThumbs:any;

  galleryTop2:any;
  galleryThumbs2:any;
 

  constructor() { }

  ngOnInit() {

  

    this.galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    this.galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
     // centeredSlides: true,
      slidesPerView: 'auto',
      touchRatio: 0.2,
      slideToClickedSlide: true,
    });
    this.galleryTop.controller.control = this.galleryThumbs;
    this.galleryThumbs.controller.control = this.galleryTop;
  

 
}

}

