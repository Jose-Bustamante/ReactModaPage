/**
 *
 * CarouselItem
 *
 */

import React from 'react';
import SlideWrapper from './SlideWrapper';
import c1 from '../../assets/img/1.png';
import TextWrapper from './TextWrapper';
import QuestionIcon from './QuestionIcon';
import Image from './Image';


function CarouselItem() {
  return (
    <SlideWrapper>
      <Image src={c1} alt="im" />
      <TextWrapper>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span><b>Sandra Winterswijk</b></span>
          <QuestionIcon src="http://cdn.mysitemyway.com/icons-watermarks/simple-pink/bfa/bfa_question-circle/bfa_question-circle_simple-pink_512x512.png" />
        </div>
        <span>Zonder tegenwind kun je niet gaan vliegen</span>
      </TextWrapper>
    </SlideWrapper>
  );
}

CarouselItem.propTypes = {

};

export default CarouselItem;
