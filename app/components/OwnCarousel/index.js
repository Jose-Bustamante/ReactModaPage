import React, { Component } from 'react';
import Slider from 'react-slick';
import Wrapper from './Wrapper';
import CarouselItem from '../CarouselItem';

export default class OwnCarousel extends Component {
  render() {
    const settings = {
      className: 'center',
      centerMode: true,
      infinite: true,
      focusOnSelect: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      centerPadding: '60px',
      speed: 500,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      }],
    };
    return (
      <Wrapper >
        <Slider {...settings}>
          <div><CarouselItem/></div>
          <div><CarouselItem/></div>
          <div><CarouselItem/></div>
          <div><CarouselItem/></div>
          <div><CarouselItem/></div>
          <div><CarouselItem/></div>
        </Slider>
      </Wrapper>
    );
  }
}

