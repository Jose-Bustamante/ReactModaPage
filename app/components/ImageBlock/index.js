/**
*
* ImageBlock
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';


function ImageBlock({ source }) {
  return (
    <Wrapper>
      <img src={source} alt="tweet" style={{ height: '100%', width: '100%' }} />
    </Wrapper>
  );
}

ImageBlock.propTypes = {
  source: PropTypes.string.isRequired,
};

export default ImageBlock;
