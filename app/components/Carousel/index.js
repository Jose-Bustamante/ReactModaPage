/**
*
* CarouselComp
*
*/

import React from 'react';
import createReactClass from 'create-react-class';
import Carousel from 'nuka-carousel';
import CarouselItem from '../CarouselItem';
import Wrapper from './Wrapper';

const sliderList = document.getElementsByClassName('slider-slide');

const CarouselComp = createReactClass({
  // getInitialState() {
  //   return { number: 0 };
  // },
  // mixins: [Carousel.ControllerMixin],
  // componentDidMount() {
  //   console.log('didMount');
  //
  //   // this.test();
  //   // console.log('aaahh', this.state.number);
  //   // document.getElementsByClassName('test2')[0].style.width = '100%';
  //   window.addEventListener('resize', this.test);
  // },
  // // reRender() {
  // //   this.render();
  // //   this.resizeTrick();
  // // },
  // // resizeTrick() {
  // //   document.getElementsByClassName('test2')[0].style.width = '100%';
  // //   const ul = document.getElementsByClassName('slider-list')[0];
  // //   for (let i = 0; i < sliderList.length; i ++) {
  // //     console.log(i);
  // //     sliderList[i].style.left = `${260 * i}px`;
  // //     sliderList[i].style.width = '250px';
  // //   }
  // //   ul.style.transform = 'translate3d(0px, 0px, 0px)';
  // //   ul.style.width = '1300px';
  // // },
  // test() {
  //   console.log('Carousel Test()', this.props.show);
  // },
  render() {
    return (
      <Wrapper className="test" >
        <Carousel

          decorators={null}
          cellSpacing={10}
          slidesToScroll={1}
          wrapAround
          slidesToShow={this.props.show}
          slideIndex={1}
          cellAlign="center"
        >
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Wrapper>
    );
  },
});

export default CarouselComp;
