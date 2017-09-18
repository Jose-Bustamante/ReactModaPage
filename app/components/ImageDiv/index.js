/**
*
* ImageDiv
*
*/

import React from 'react';
// import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import TextWrapper from './TextWrapper';
import BackGroundWrapper from './BackGroundWrapper';
import P from '../P';

function ImageDiv() {
  return (
    <Wrapper>
      <BackGroundWrapper />
      <TextWrapper>
        {'The'}
        &nbsp;
        {'XX'}
      </TextWrapper>
      {/*<div style={{ display: 'flex' }}>*/}
        {/*<P>*/}
          {/*{'The xx is een driekoppige Engelse indieband, gevormd in Wandsworth, Londen in 2005. De drie brachten hun debuutalbum, xx, uit in augustus 2009. Het kwam op de eerste plaats van de "best of 2009"-lijst van The Guardian en op de tweede op die van NME.'}*/}
        {/*</P>*/}
      {/*</div>*/}
    </Wrapper>
  );
}

ImageDiv.propTypes = {

};

export default ImageDiv;
