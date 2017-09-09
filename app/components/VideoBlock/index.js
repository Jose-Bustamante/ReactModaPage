/**
*
* VideoBlock
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';

function VideoBlock({ source }) {
  return (
    <Wrapper source={source}>
      <video
        controls
        style={{
          maxWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto',
          backgroundSize: 'cover',
          objectFit: 'fill',
        }}
      >
        <source src={source} type="video/mp4" />
        <source src={source} type="video/ogg" />
        {'Your browser does not support HTML5 video.'}
      </video>
    </Wrapper>
  );
}

VideoBlock.propTypes = {
  source: PropTypes.string.isRequired,
};

export default VideoBlock;
